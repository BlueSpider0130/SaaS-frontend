<template>
  <div class="logo">
    <img class="img-fluid logo_img" :src="sectionImage" alt="#">
    <div :class="'iq-font-'+sectionColor+' iq-mt-15'">
      {{ sectionText }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLogo',
  // eslint-disable-next-line vue/require-prop-types
  props: ['sectionImage', 'sectionColor', 'sectionText']
}
</script>
