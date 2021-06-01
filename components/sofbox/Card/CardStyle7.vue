<template>
  <div class="iq-client white-bg">
    <div class="client-img">
      <slot name="cardMedia" />
    </div>
    <div class="client-info">
      <div class="client-name iq-mb-10">
        <slot name="cardHeader" />
      </div>
      <slot name="cardBody" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyle7'
}
</script>
