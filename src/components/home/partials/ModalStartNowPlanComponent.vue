<template>
  <div
    class="modal fade"
    id="modalStartNowPlanComponent"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content text-white">
        <div class="modal-header">
          <h5 class="modal-title">Start now</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span
              aria-hidden="true"
              class="text-white"
              @click="setShowModalGetYoursNow(false)"
              >&times;</span
            >
          </button>
        </div>
        <div class="modal-body mb-3">
          <p class="content">
            Contact with us, using one of the following methods!
          </p>
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <a
                v-for="(link, idx) in links"
                :key="idx"
                :href="canShowPopupLimitedOffer ? link.altUrl : link.url"
                class="col-12 col-md-7 p-2 contact
                d-flex align-items-center justify-content-center"
                :class="link.class"
                target="_blank"
                rel="noopener noreferrer"
                :data-aos="link.aos"
                data-aos-duration="1500"
                :data-aos-delay="150 * (idx + 1)"
              >
                <div class="img"></div>
                <span class="text-white">{{ link.content }}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            @click="setShowModalGetYoursNow(false)"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ModalStartNowPlanComponent",
  computed: {
    ...mapState("home", ["canShowPopupLimitedOffer"])
  },
  methods: {
    ...mapMutations("home", ["setShowModalGetYoursNow"])
  },
  data: () => {
    return {
      links: [
        {
          url: "mailto:saragusfit@gmail.com",
          altUrl: "mailto:saragusfit@gmail.com",
          content: "saragusfit@gmail.com",
          class: "contact-email",
          aos: "fade-right"
        },
        {
          url: "https://wa.link/t5ug6i",
          altUrl: "https://wa.link/tanzpx",
          content: "Agustina",
          class: "contact-whatsapp",
          aos: "fade-left"
        },
        {
          url: "https://wa.link/4elvg4",
          altUrl: "https://wa.link/yuo9tn",
          content: "Sara",
          class: "contact-whatsapp",
          aos: "fade-right"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  animation: fadeInOpacity linear 1.3s;

  .modal-header {
    border: unset;
  }

  .modal-footer {
    border: unset;
  }
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.modal-content {
  background-image: url("../../../assets/home/saragusfit_startnow_modal_background.jpg");
  background-size: cover;
  background-position: center;
}

.contact {
  border-radius: 5px;
  background-size: 400%;
  animation: gradient 15s ease infinite;
  cursor: pointer;
  position: relative;
  transition: all 1s;
  text-decoration: unset;
  margin-bottom: 0.5rem;

  &:hover {
    box-shadow: 5px 5px 35px 0px rgba(255, 255, 255, 0.3);
  }

  .img {
    width: 20px;
    height: 20px;
    background-size: cover;
    margin-right: 0.3rem;
  }

  &-email {
    background: linear-gradient(
      45deg,
      rgba(222, 147, 193, 1) 45%,
      rgba(25, 79, 146, 1) 100%
    );

    .img {
      background-image: url("../../../assets/svg/social-medias/email.svg");
    }

    background-size: 400%;
    animation: gradient 15s ease infinite;
  }

  &-whatsapp {
    background: linear-gradient(45deg, #b5ff8a, #1ebea5, #00e676);

    .img {
      background-image: url("../../../assets/svg/social-medias/whatsapp.svg");
    }

    background-size: 400%;
    animation: gradient 15s ease infinite;
  }
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
