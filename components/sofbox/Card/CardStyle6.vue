<template>
  <div class="iq-fancy-box iq-works-box text-center">
    <div class="iq-icon">
      <slot name="cardMedia" />
    </div>
    <div class="fancy-content">
      <slot name="cardBody" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyle6'
}
</script>
