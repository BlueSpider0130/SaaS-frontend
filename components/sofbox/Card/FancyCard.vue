<template>
  <div class="iq-fancy-boxnew text-center">
    <div class="iq-icon icon-bg ">
      <i aria-hidden="true" :class="icon"></i>
    </div>
    <div class="fancy-content">
      <h5 class="iq-tw-7 iq-pt-20 iq-pb-10">
        {{ title }}
      </h5>
      <p>{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyCard',
  // eslint-disable-next-line vue/require-prop-types
  props: ['icon', 'title', 'text']
}
</script>
