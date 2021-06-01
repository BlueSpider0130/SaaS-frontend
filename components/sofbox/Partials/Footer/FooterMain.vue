<template>
  <footer id="contact" :class="footerClass">
    <div class="container">
      <slot name="footerContent"></slot>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterMain',
  // eslint-disable-next-line vue/require-prop-types
  props: ['footerClass']
}
</script>
