module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "~swiper/components/effect-cube/effect-cube.scss";          
            @import "~swiper/components/navigation/navigation.scss";          
            @import "~swiper/components/effect-coverflow/effect-coverflow.scss";          
            `
      }
    }
  }
};
