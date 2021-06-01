<template>
  <ParallaxStyle1 class-names="iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-90 iq-font-white iq-parallax" :bg-image="image" ids="counter">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 text-left">
          <div class="counter">
            <i class="ion-ios-folder-outline " aria-hidden="true" />
            <div class="counter-date">
              <label class="iq-font-white text-uppercase">App Downloads</label>
              <span class="timer iq-tw-7">
                <count-to :start-val="0" :end-val="1540" :duration="25000" />
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-left r4-mt-30">
          <div class="counter">
            <i class="ion-ios-paper-outline " aria-hidden="true" />
            <div class="counter-date">
              <label class="iq-font-white text-uppercase">Happy Clients</label>
              <span class="timer iq-tw-7">
                <count-to :start-val="0" :end-val="2530" :duration="25000" />
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-left r-mt-30">
          <div class="counter">
            <i class="ion-ios-person-outline " aria-hidden="true" />
            <div class="counter-date">
              <label class="iq-font-white text-uppercase">Active Accounts</label>
              <span class="timer iq-tw-7">
                <count-to :start-val="0" :end-val="8120" :duration="25000" />
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 text-left r-mt-30">
          <div class="counter">
            <i class="ion-ios-star " aria-hidden="true"></i>
            <div class="counter-date">
              <label class="iq-font-white text-uppercase">Total App Rates</label>
              <span class="timer iq-tw-7">
                <count-to :start-val="0" :end-val="1620" :duration="25000" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="counter-info iq-mt-60 iq-pt-60">
        <div class="row">
          <div class="col-lg-6">
            <p class="iq-mt-30">Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.</p>
            <p>Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.</p>
            <a href="javascript:void(0)" class="button bt-black iq-mt-15 iq-mb-30">Download</a>
          </div>
          <div class="col-lg-6">
            <div class="counter-info-img">
              <img class="center-block" :src="require('../../assets/images/drive/07.png')" alt="#">
              <div class="waves-box">
                <a href="https://www.youtube.com/watch?v=kzyFmrFky7Y" class="iq-video popup-youtube"><i class="ion-ios-play-outline" /></a>
                <div class="iq-waves">
                  <div class="waves wave-1" />
                  <div class="waves wave-2" />
                  <div class="waves wave-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ParallaxStyle1>
</template>
<script>
import countTo from 'vue-count-to'
export default {
  name: 'Counter',
  components: {
    countTo
  },
  data () {
    return {
      image: require('../../assets/images/bg/02.jpg')
    }
  }
}
</script>
