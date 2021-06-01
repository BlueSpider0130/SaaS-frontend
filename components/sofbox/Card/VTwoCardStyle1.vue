<template>
  <div>
    <div class="dot-circle">
      <div class="effect-circle" />
      <div class="main-circle">
        <div class="circle-bg">
          <img :src="image" alt="fancybox">
        </div>
      </div>
    </div>
    <h4 class="mb-2">
      {{ title }}
    </h4>
    <p>
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'VTwoCardStyle1',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    // eslint-disable-next-line vue/require-default-prop
    text: String,
    // eslint-disable-next-line vue/require-default-prop
    image: String
  }
}
</script>
