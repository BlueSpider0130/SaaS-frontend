<template>
  <div :class="sectionClass">
    <div :class="fullWidth ? 'container-fluid' : 'container'">
      <div :class="reverse ? 'row flex-row-reverse' : 'row'">
        <div :class="'col-lg-'+colLeft">
          <h2 class="iq-tw-6 iq-font-white iq-mb-20 section-title">
            <slot name="sectionTitle" />
          </h2>
          <p>
            <slot name="sectionDescription" />
          </p>
          <slot name="sectionFooter" />
        </div>
        <div :class="'col-lg-'+colRight">
          <slot name="sectionImage" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SectionStyle6',
  props: {
    fullWidth: { default: false, type: Boolean },
    reverse: { default: false, type: Boolean },
    colRight: { default: 6, type: Number },
    colLeft: { default: 6, type: Number },
    sectionClass: { default: '', type: String }
  },
  data () {
    return {
    }
  }
}
</script>
