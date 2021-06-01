<template>
  <div class="future-services text-center">
    <div class="future-img">
      <slot name="cardMedia"></slot>
    </div>
    <slot name="cardTitle"></slot>
    <slot name="cardBody"></slot>
  </div>
</template>
<script>
export default {
  name: 'CardStyle9'
}
</script>
