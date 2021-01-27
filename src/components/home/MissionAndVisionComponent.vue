<template>
  <div class="our-mision-and-vision">
    <div class="separate"></div>
    <div class="container">
      <div class="row align-items-end p-3">
        <div class="mission" data-aos="fade-left" data-aos-duration="1500">
          <h2 class="title">OUR MISSION</h2>
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            eligendi error esse iusto mollitia, quam sapiente ut. Et,
            perferendis ut.
          </p>
        </div>

        <div
          class="vision"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          <h2 class="title">OUR VISION</h2>
          <p class="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            eligendi error esse iusto mollitia, quam sapiente ut. Et,
            perferendis ut.
          </p>
        </div>
      </div>
    </div>

    <div class="wrapper-reflejos">
      <div class="reflejos"></div>
      <div class="reflejos segundo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionAndVisionComponent"
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 599px) {
  .our-mision-and-vision {
    margin-top: 5rem;
    min-height: 26rem;

    .separate {
      height: 4rem;
    }
  }
}

.mission,
.vision {
  .title {
    color: white;
    font-weight: bold;
  }

  .content {
    color: #e9ecef;
    padding-left: 1rem;
  }
}

.vision {
  margin-top: 2rem;

  .title {
    text-align: right;
  }
}

.our-mision-and-vision {

  .separate {
    height: 9.5rem;
    clear: both;
  }

  height: 32rem;
  background: linear-gradient(
    45deg,
    rgba(222, 147, 193, 1) 45%,
    rgba(25, 79, 146, 1) 100%
  );

  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 14.1vw;
    background-image: url("../../assets/svg/wave-banner-3.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(50%);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 20vw;
    background-image: url("../../assets/svg/wave-banner-2.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-50%);
  }

  .wrapper-reflejos {
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .reflejos {
      pointer-events: none;
      position: absolute;
      top: 0px;
      width: 300px;
      height: 100%;
      z-index: 0;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        20deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      opacity: 0.1;
      animation: reflejo 45s infinite;
    }

    .segundo {
      animation-direction: reverse;
    }
  }
}
</style>
