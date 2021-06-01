<template>
  <section id="iq-home" class="overview-block-ptb iq-breadcrumb iq-banner-13 text-left iq-over-blue-30 ">
    <div class="banner-text">
      <div class="container">
        <div class="align-items-center" :class="reverse ? 'row flex-row-reverse' : 'row'">
          <div class="col-lg-7 ">
            <slot name="media" />
          </div>
          <div class="col-lg-5 text-left">
            <slot name="content" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerStyle1',
  // eslint-disable-next-line vue/require-prop-types
  props: ['reverse']
}
</script>

<style scoped>

</style>
