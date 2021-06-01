<template>
  <div class="pricing-plan">
    <div class="iq-icon">
      <i aria-hidden="true" :class="icon"></i>
    </div>
    <h4 class="iq-tw-5">
      {{ title }}
    </h4>
    <slot name="cardBody" />
  </div>
</template>

<script>
export default {
  name: 'PricingCardStyle3',
  // eslint-disable-next-line vue/require-prop-types
  props: ['icon', 'title']
}
</script>
