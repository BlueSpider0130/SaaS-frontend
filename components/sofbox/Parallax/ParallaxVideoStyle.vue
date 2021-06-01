<template>
  <div :id="ids" data-parallax-video="true" :class="classNames" data-jarallax-video="m4v:../../../../assets/video/01.m4v,webm:../../../../assets/video/01.webm,ogv:../../../../assets/video/01.ogv">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ParallaxVideoStyle',
  // eslint-disable-next-line vue/require-prop-types
  props: ['classNames']
}
</script>
