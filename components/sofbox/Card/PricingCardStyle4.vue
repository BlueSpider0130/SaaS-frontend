<template>
  <div class="pricing-plan">
    <div class="iq-icon">
      <slot name="cardIcon" />
    </div>
    <slot name="cardTitle" />
    <slot name="cardText" />
    <slot name="cardPrice" />
    <slot name="cardButton" />
  </div>
</template>

<script>
export default {
  name: 'PricingCardStyle4'
}
</script>

<style scoped>

</style>
