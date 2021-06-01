<template>
  <div>
    <h6 class="title text-white mb-0">
      {{ title }}
    </h6>
    <h2 class="text-white mb-3">
      {{ subtitle }}
    </h2>
    <p class="mb-5">
      {{ titlecontent }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'BlackSectionTitle2',
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'subtitle', 'titlecontent']
}
</script>
