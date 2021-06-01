<template>
  <div class="effect-chico blog">
    <img :src=" image " class="img-fluid" alt="img">
    <div class="blog-info">
      <slot name="cardBody" />
    </div>
    <div class="blog-comment">
      <slot name="cardFooter" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlackCardStyle4',
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
