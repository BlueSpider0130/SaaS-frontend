<template>
  <div class="iq-works-box text-left">
    <div class="step">
      {{ step }}
    </div>
    <div class="icon-bg text-center">
      <slot name="cardMedia"/>
    </div>
    <slot name="cardBody"/>
  </div>
</template>

<script>
export default {
  name: 'CardStyle5',
  // eslint-disable-next-line vue/require-prop-types
  props: ['step']
}
</script>
