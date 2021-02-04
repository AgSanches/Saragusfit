module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "~swiper/components/effect-cube/effect-cube.scss";
            `
      }
    }
  }
};
