<template>
  <div class="iq-pricing text-center">
    <ParallaxStyle1 :bg-image="bgImage" class-names="price-title iq-parallax iq-over-blue-80">
      <slot name="cardHeader" />
    </ParallaxStyle1>
    <slot name="cardList" />
    <div class="price-footer">
      <slot name="cardFooter" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'PricingCardStyle2',
  data () {
    return {
      bgImage: require('../../../assets/images/bg/08.jpg')
    }
  }
}
</script>
