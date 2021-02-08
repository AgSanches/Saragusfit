<template>
  <nav>
    <ul>
      <li data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">
        <a
          href="https://www.instagram.com/saragusfit/"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <img src="../../../assets/icons/instagram.png" alt="" width="48" />
          </span>
        </a>
      </li>
      <li data-aos="fade-down" data-aos-duration="1700" data-aos-delay="300">
        <a
          href="https://www.facebook.com/saragusfit/?ref=page_internal"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <img src="../../../assets/icons/facebook.png" alt="" width="48" />
          </span>
        </a>
      </li>
      <li data-aos="fade-down" data-aos-duration="1800" data-aos-delay="400">
        <a
          href="https://www.tiktok.com/@saragusfit?_d=secCgYIASAHKAESMgowylu1z2QlxceZwgwRDyneND4Aqcd5Gv4Yb48LBR6ASvFZDpcdHwtJKYEKX04uZ5lwGgA%3D&language=es&sec_uid=MS4wLjABAAAAbAouE6knZpzJkYw6oZoT3iAyZe8SCWHR07uKoM5VxBVJm7_AMUOBQ_CMGzOJzqsG&sec_user_id=MS4wLjABAAAAbAouE6knZpzJkYw6oZoT3iAyZe8SCWHR07uKoM5VxBVJm7_AMUOBQ_CMGzOJzqsG&share_author_id=6912013444297163778&share_link_id=7791508D-C162-4C61-814C-37C53DDE9490&tt_from=whatsapp&u_code=dg9800e46592l7&user_id=6912013444297163778&utm_campaign=client_share&utm_medium=ios&utm_source=whatsapp&source=h5_m"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <img src="../../../assets/icons/tik-tok.png" alt="" width="48" />
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SocialMediaLinksComponent"
};
</script>

<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
  color: #fff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  max-width: 95vw;
}

ul li {
  position: relative;
  background-color: #292929;
  margin-right: 15px;
  width: 25%;
  transition: 0.4s;
}

ul li:last-of-type {
  margin-right: 0;
}

ul li::before {
  content: "";
  position: absolute;
  top: 0;
  left: -9px;
  background-color: #242424;
  height: 100%;
  width: 9px;
  transform-origin: right;
  transform: skewY(-45deg);
}

ul li::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  background-color: #242424;
  width: 100%;
  height: 10px;
  transform-origin: top;
  transform: skewX(-45deg);
}

ul li span {
  position: absolute;
  top: 0;
  left: 0;
  display: flex !important;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  font-size: 3em;
  transition: 0.4s;
}

li:hover a span {
  z-index: 1000;
  transition: 0.5s;
  color: rgba(255, 255, 255, 1);
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.05);
}

li:hover > a span:nth-of-type(1) {
  transform: translate(10px, -10px);
}
li:hover > a span:nth-of-type(2) {
  transform: translate(20px, -20px);
}
li:hover > a span:nth-of-type(3) {
  transform: translate(30px, -30px);
}
li:hover > a span:nth-of-type(4) {
  transform: translate(40px, -40px);
}
li:hover > a span:nth-of-type(5) {
  transform: translate(50px, -50px);
}

a span:nth-of-type(1) {
  opacity: 0.2;
}
a span:nth-of-type(2) {
  opacity: 0.4;
}
a span:nth-of-type(3) {
  opacity: 0.6;
}
a span:nth-of-type(4) {
  opacity: 0.8;
}
a span:nth-of-type(5) {
  opacity: 1;
}

li:nth-of-type(1):hover span {
  background-color: #d6249f;
  background-image: linear-gradient(270deg, #fd5949, #d6249f, #285aeb);
  background-size: 800% 800%;
  animation: gradient 10s ease infinite;
}

li:nth-of-type(2):hover span {
  background-color: #3b5998;
  background-image: linear-gradient(270deg, #3b5998, #383838);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
}

li:nth-of-type(3):hover span {
  background-color: #ee1d52;
  background-image: linear-gradient(270deg, #69c9d0, #ee1d52);
  background-size: 400% 400%;
  animation: gradient 6s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
