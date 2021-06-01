<template>
  <div :class="animationShapeRight ? 'animationnew-shap' : 'animation-shap'">
    <div class="shap-bg"></div>
  </div>
</template>
<script>
export default {
  name: 'AnimateShape',
  props: ['animationShapeRight']
}
</script>
