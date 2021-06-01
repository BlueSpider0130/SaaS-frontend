<template>
  <section :id="ids" :class="className">
    <AnimateShape v-if="animation" :animation-shape-right="reverse"></AnimateShape>
    <div class="container-fluid">
      <div :class="reverse ? 'row flex-row-reverse' : 'row'">
        <div class="col-lg-6 col-md-6 ">
          <slot name="sectionImage" />
        </div>
        <div class="col-lg-4 col-md-5 align-self-center">
          <slot name="sectionTitle" />
          <slot name="sectionBody" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnimateSection',
  // eslint-disable-next-line vue/require-prop-types
  props: ['reverse', 'animation', 'className', 'ids']
}
</script>
