<template>
  <ParallaxStyle1 ids="iq-home" :bg-image="bgImage" class-names="iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax">
    <div class="container-fluid">
      <div class="banner-text">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="text-uppercase iq-font-white iq-tw-3" >
              A better way to sell your <b class="iq-tw-7">digital</b> products
            </h1>
            <p class="iq-font-white iq-pt-15 iq-mb-40">
              Big or small, we help all businesses simplify and automate digital product checkout and delivery.
            </p>
            <a to="#pricing" class="nav-link button bt-black iq-mt-5" @click="jumpTo('#pricing')">Sign up</a>
          </div>
          <div class="col-lg-6">
            <img class="banner-img" :src="require('../../assets/images/banner/01.png')" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="banner-objects">
      <span class="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
        <img :src="require('../../assets/images/drive/03.png')" alt="drive02">
      </span>
      <span class="banner-objects-02 iq-fadebounce">
        <span class="iq-round" />
      </span>
      <span class="banner-objects-03 iq-fadebounce">
        <span class="iq-round" />
      </span>
    </div>
  </ParallaxStyle1>
</template>
<script>
const $ = require('jquery')

export default {
  name: 'Home',
  data () {
    return {
      bgImage: require('../../assets/images/bg/01.jpg')
    }
  },
  methods: {
    jumpTo (href) {
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 1500)
    }
  }
}
</script>
