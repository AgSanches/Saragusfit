<template>
  <div v-if="canShowModal && content" class="position-relative">
    <div class="hideOffer">
      <img
        src="../../../assets/icons/arrow-down-sign-to-navigate.svg"
        alt="Arrow down"
        @click="hideDescription = !hideDescription"
        :class="{ translateIcon: hideDescription }"
      />
    </div>

    <div
      class="popup-limited-offer d-flex text-white flex-wrap justify-content-center"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <div class="col-12 col-md-8 content" v-if="!hideDescription">
        <p class="title">{{ content.title }}</p>
        <p class="text">{{ content.text }}</p>
      </div>
      <div
        class="col-12 col-md-4 timer text-center
        d-flex flex-column align-items-center justify-content-center content"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="250"
      >
        <p class="title" v-if="hideDescription">{{ content.title }}</p>
        <div class="time">
          {{ timer.hours }}:{{ timer.minutes }}:{{ timer.seconds }}
        </div>
        <button class="btn btn-primary">Start now</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "PopupOfferWorkoutComponent",
  props: {
    content: Object
  },
  data: () => {
    return {
      canShowModal: false,
      timer: {
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      maximumTime: null,
      hideDescription: screen.width < 599
    };
  },
  methods: {
    ...mapMutations("home", ["setShowPopupLimitedOffer"]),
    createTimeout() {
      setTimeout(this.modifyTimer, 1000);
    },
    getLocalStorage() {
      return JSON.parse(localStorage.getItem("limitedOfferTime"));
    },
    createTimer() {
      const timeLocalStorage = this.getLocalStorage();
      if (timeLocalStorage) {
        this.maximumTime = timeLocalStorage.time;
      } else {
        this.createTimerDefault();
      }
    },
    createTimerDefault() {
      const { time } = this.content;
      const oldDate = new Date();
      this.maximumTime = new Date(oldDate.getTime() + time * 60000).getTime();
      this.initializeLocalStorageWithTime(this.maximumTime);
    },
    initializeLocalStorageWithTime(time) {
      const timer = {
        time
      };

      localStorage.setItem("limitedOfferTime", JSON.stringify(timer));
    },
    modifyTimer() {
      const currentDate = new Date().getTime();
      const timeleft = new Date(this.maximumTime - currentDate);

      if (timeleft && timeleft > 0) {
        this.canShowModal = true;
        this.timer.hours = this.getTrailingZero(timeleft.getHours());
        this.timer.minutes = this.getTrailingZero(timeleft.getMinutes());
        this.timer.seconds = this.getTrailingZero(timeleft.getSeconds());
        setTimeout(this.modifyTimer, 1000);
      } else if (timeleft && timeleft <= 0) {
        this.setShowPopupLimitedOffer(false);
      }
    },
    getTrailingZero(number) {
      return `0${number}`.slice(-2);
    }
  },
  created() {
    this.createTimer();
    this.createTimeout();
  }
};
</script>

<style scoped lang="scss">
.popup-limited-offer {
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  width: 75%;
  padding: 1.5rem;
  margin: 0 auto;

  .content {
    .title {
      font-size: 1.45rem;
      margin-bottom: 0.25rem;
      animation: fadeIn 0.3s linear;
    }
  }

  .timer {
    .time {
      font-size: 1.75rem;
    }
  }
}

.btn {
  font-size: 1.25rem;
  animation: scale 6s linear infinite;
}

.hideOffer {
  position: absolute;
  right: 45px;
  top: 25px;
  cursor: pointer;
  z-index: 999;

  img {
    width: 24px;
    transition: all 1s;
  }
}

.translateIcon {
  transform: rotateX(180deg);
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  70% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
