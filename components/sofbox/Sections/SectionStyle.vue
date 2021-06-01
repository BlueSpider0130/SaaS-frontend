<template>
  <div :id="sectionId" :class="sectionClass">
    <div :class="fullWidth ? 'container-fluid' : 'container'">
      <div class="row ">
        <div class="col-sm-12">
          <div class="heading-title">
            <slot name="sectionTitle" />
            <slot name="sectionDescription" />
          </div>
        </div>
      </div>
      <slot name="sectionContent" />
      <slot name="sectionFooter" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'SectionStyle',
  // eslint-disable-next-line vue/require-prop-types
  props: ['sectionId', 'sectionClass', 'fullWidth']
}
</script>
