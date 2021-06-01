<template>
  <div :class="'iq-pricing mb-4 mb-lg-0 text-center wow fadeInUp'+' '+ className ">
    <div class="price-title iq-parallax">
      <div class="month-circle">
        <slot name="cardHeader" />
      </div>
      <slot name="cardTitle" />
    </div>
    <slot name="cardList" />
    <div class="price-footer">
      <slot name="cardFooter" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'VTwoPricingCardStyle1',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    className: String

  }
}
</script>
