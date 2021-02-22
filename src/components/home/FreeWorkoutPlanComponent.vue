<template>
  <div
    class="free-workout-plan row justify-content-center align-items-center mx-0"
    id="free-workout-plan"
  >
    <div class="overlay overlay-black"></div>
    <div class="wrapper-reflejos" data-aos="zoom-in" data-aos-duration="1000">
      <div class="reflejos"></div>
      <div class="reflejos segundo"></div>
    </div>
    <FreeWorkoutSectionContent
      :content="content"
      :file-path="filePath"
    ></FreeWorkoutSectionContent>
    <PopupDownloadWorkoutComponent
      :content="content"
      :file-path="filePath"
    ></PopupDownloadWorkoutComponent>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PopupDownloadWorkoutComponent from "./partials/PopupDownloadWorkoutComponent";
import FreeWorkoutSectionContent from "./partials/FreeWorkoutSectionContent";

export default {
  name: "FreeWorkoutPlanComponent",
  components: {
    PopupDownloadWorkoutComponent,
    FreeWorkoutSectionContent
  },
  data: () => {
    return {
      doc: "fitnessChallenge",
      content: {
        title: "FITNESS CHALLENGES",
        subtitle: "Complimentary service and completely FREE.",
        text:
          "Join our fitness challenges, and let us help you achieve your fitness goals and improve your performance in no time.",
        button: "FREE WORKOUT",
        name: ""
      },
      filePath: ""
    };
  },
  methods: {
    ...mapActions("home", ["getText"]),
    ...mapActions("admin", ["getFile"]),
    downloadFile() {
      this.getFile(this.content.name).then(response => {
        this.filePath = response.data;
      });
    }
  },
  created() {
    this.getText(this.doc).then(response => {
      this.content = response;
      this.downloadFile();
    });
  }
};
</script>

<style scoped lang="scss">
.free-workout-plan {
  width: 100vw;
  height: 20rem;

  @media screen and (max-width: 599px) {
    height: 23rem;
  }

  background-size: cover;
  background-position: center;
  background-image: url("../../assets/home/saragusfit-free-workout.jpg");
  position: relative;
  margin-top: 2rem;
}

.wrapper-reflejos {
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;

  .reflejos {
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 300px;
    height: 100%;
    z-index: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      20deg,
      rgb(25, 79, 146) 0%,
      rgba(25, 79, 146, 0) 70%
    );
    opacity: 0.2;
    animation: reflejo 50s infinite;
  }

  .segundo {
    animation-direction: reverse;
  }
}

@keyframes reflejo {
  0% {
    transform: translateX(50vw) skewX(30deg);
  }
  20% {
    transform: translateX(80vw) skewX(30deg);
  }
  50% {
    transform: translateX(40vw) skewX(30deg);
  }
  70% {
    transform: translateX(30vw) skewX(30deg);
  }
  85% {
    transform: translateX(70vw) skewX(30deg);
  }
  100% {
    transform: translateX(50vw) skewX(30deg);
  }
}
</style>
