<template>
  <div class="social-media mt-4">
    <TitleComponent title="FOLLOW US"></TitleComponent>

    <div class="container mt-3" data-aos="zoom-in" data-aos-duration="1500">
      <div v-if="isMobile">
        <transition name="fade">
          <SocialMediaPostMobileComponent
            v-if="parseInstagramPosts.length > 0"
            :instagram-posts="parseInstagramPosts"
          ></SocialMediaPostMobileComponent>
        </transition>
      </div>

      <div v-else>
        <transition name="fade">
          <SocialMediaPostsDesktopComponent
            v-if="parseInstagramPosts.length > 0"
            :instagram-posts="parseInstagramPosts"
          ></SocialMediaPostsDesktopComponent>
        </transition>
      </div>
    </div>

    <div class="social-links">
      <SocialMediaLinksComponent></SocialMediaLinksComponent>
    </div>
  </div>
</template>

<script>
import TitleComponent from "./partials/TitleComponent";
import SocialMediaPostMobileComponent from "./partials/SocialMediaPostMobileComponent";
import SocialMediaPostsDesktopComponent from "./partials/SocialMediaPostsDesktopComponent";
import SocialMediaLinksComponent from "./partials/SocialMediaLinksComponent";
import apiTokenInstagram from "../../repository/instagramCredentials.js";
import { mapActions } from "vuex";

export default {
  name: "SocialMediaComponent",
  components: {
    TitleComponent,
    SocialMediaPostMobileComponent,
    SocialMediaPostsDesktopComponent,
    SocialMediaLinksComponent
  },
  data: () => {
    return {
      apiToken: apiTokenInstagram,
      fields: "media_url,media_type,caption,permalink",
      instagramPosts: [],
      limit: 8
    };
  },
  methods: {
    ...mapActions("general", ["fetchInstagramPost"]),
    getInstagramPosts() {
      this.fetchInstagramPost({
        apiToken: this.apiToken,
        fields: this.fields
      }).then(response => {
        this.instagramPosts = response.data.data;
      });
    }
  },
  mounted() {
    this.getInstagramPosts();
  },
  computed: {
    parseInstagramPosts() {
      if (this.instagramPosts.length < 1) {
        return [];
      }

      const parsePosts = this.instagramPosts.filter(
        post => post.media_type !== "VIDEO"
      );

      return parsePosts.slice(0, this.limit);
    },
    isMobile() {
      return screen.width < 599;
    }
  }
};
</script>

<style scoped lang="scss">
.swiper-wrapper {
  margin-bottom: 2rem;
}

.social-links {
  height: 18rem;
  margin-top: 2rem;
  position: relative;
}
</style>
