<template>
  <div class="iq-our-clients white-bg iq-ptb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div
            class="owl-carousel"
            data-autoplay="true"
            data-loop="true"
            data-nav="true"
            data-dots="false"
            data-items="5"
            data-items-laptop="5"
            data-items-tab="4"
            data-items-mobile="3"
            data-items-mobile-sm="1"
            data-margin="30" >
            <div v-for="(option,index) in images" :key="index" class="item">
              <img class="img-fluid center-block" :src="option.src" alt="#">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Client',
  data () {
    return {
      images: [
        { src: require('../../assets/images/clients/01.png') },
        { src: require('../../assets/images/clients/02.png') },
        { src: require('../../assets/images/clients/03.png') },
        { src: require('../../assets/images/clients/04.png') },
        { src: require('../../assets/images/clients/05.png') },
        { src: require('../../assets/images/clients/06.png') },
        { src: require('../../assets/images/clients/07.png') },
        { src: require('../../assets/images/clients/09.png') }
      ]
    }
  }
}
</script>
