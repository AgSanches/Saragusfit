<template>
  <div
    class="modal fade"
    id="modalStartNowPlanComponent"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Start now</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body mb-3">
          <p class="content">
            Contact with us, using one of the following methods!.
          </p>
          <div class="container">
            <div class="d-flex justify-content-center">
              <div class="link" data-aos="fade-up" data-aos-duration="1200">
                <a
                  href="https://www.instagram.com/saragusfit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../../assets/icons/instagram.png"
                    alt="Instagram logo"
                    class="logo"
                  />
                </a>
              </div>
              <div class="link" data-aos="fade-up" data-aos-duration="1200">
                <a
                  href="https://www.facebook.com/saragusfit/?ref=page_internal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../../assets/icons/facebook.png"
                    alt="Facebook logo"
                    class="logo"
                  />
                </a>
              </div>
              <div class="link" data-aos="fade-up" data-aos-duration="1200">
                <a
                  href="mailto:saragusfit@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../../../assets/icons/email.png"
                    alt="Email logo"
                    class="logo"
                  />
                </a>
              </div>
              <div class="link" data-aos="fade-up" data-aos-duration="1200">
                <span class="whatsapp-name">Agustina</span>
                <a
                  href="https://wa.link/qb3xrh"
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Agustina"
                >
                  <img
                    src="../../../assets/icons/whatsapp-start-now.png"
                    alt="Whatsapp icon"
                    class="logo"
                  />
                </a>
              </div>
              <div class="link" data-aos="fade-up" data-aos-duration="1200">
                <span class="whatsapp-name">Sara</span>
                <a
                  href="https://wa.link/d5hqif"
                  target="_blank"
                  rel="noreferrer"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Sara"
                >
                  <img
                    src="../../../assets/icons/whatsapp-start-now.png"
                    alt="Whatsapp icon"
                    class="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalStartNowPlanComponent"
};
</script>

<style scoped lang="scss">
.link {
  border-radius: 50%;
  padding: 0.75rem;
  background: #de93c1;
  margin-right: 1rem;
  position: relative;
  text-align: center;

  .logo {
    width: 24px;
  }
}

.whatsapp-name {
  position: absolute;
  transform: translateY(40px);
  text-align: center;
  width: 100%;
  margin: 0 auto;
  left: 0;
}
</style>
