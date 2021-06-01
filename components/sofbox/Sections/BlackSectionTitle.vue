<template>
  <div class="title-box text-center">
    <h6 class="title text-white">
      {{ title }}
    </h6>
    <h2 class="text-white">
      {{ subtitle }}
    </h2>
  </div>
</template>
<script>
export default {
  name: 'BlackSectionTitle',
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'subtitle']
}
</script>
