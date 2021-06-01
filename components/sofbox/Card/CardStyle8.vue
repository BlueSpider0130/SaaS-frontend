<template>
  <div class="iq-team grey-bg">
    <div class="iq-team-img">
      <slot name="cardMedia" />
    </div>
    <div class="iq-team-info text-center">
      <slot name="cardHeader" />
    </div>
    <div class="share">
      <slot name="cardOverlay" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyle8'
}
</script>
