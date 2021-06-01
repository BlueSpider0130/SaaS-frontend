<template>
  <div class="iq-pricing-5 iq-ptb-40" :class="active ? 'active' : ''">
    <div class="pricing-header iq-mb-30">
      <h6 class="iq-tw-6 iq-mb-10 text-capitalize">
        {{ item.title }}
      </h6>
      <h3 class="iq-tw-6">
        {{ item.price }}
      </h3>
    </div>
    <slot name="cardBody" />
    <slot name="cardFooter" />
  </div>
</template>
<script>
export default {
  name: 'PricingCardStyle1',
  // eslint-disable-next-line vue/require-prop-types
  props: ['active', 'item']
}
</script>
