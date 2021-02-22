<template>
  <div class="mb-md-5">
    <a
            class="post"
            :href="post.permalink"
            target="_blank"
            rel="noreferrer nofollow noopener"
            data-aos="zoom-in"
            data-aos-duration="1200"
    >
      <div class="img-wrapper">
        <img
                :src="post.media_url"
                class="w-100"
                alt="Instagram post from Saragusfit"
        />
      </div>
    </a>
  </div>

</template>

<script>
export default {
  name: "SocialMediaCardComponent",
  props: {
    post: Object
  }
};
</script>

<style scoped lang="scss">
.post {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.img-wrapper {
  max-width: 35rem;
  display: block;
  margin: 0 auto;
}
</style>
