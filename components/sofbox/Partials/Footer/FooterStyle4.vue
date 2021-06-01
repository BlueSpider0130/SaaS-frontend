<template>
  <div id="contact" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-7 col-sm-12 text-left iq-font-dark">
          <div class="iq-ptb-20">
            <slot name="copyright"/>
          </div>
        </div>
        <div class="col-md-5 col-lg-4 col-sm-12 align-self-center">
            <ul class="info-share text-center text-sm-right">
                <slot name="links" />
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterStyle4',
  props: ['socialNavItemList']
}
</script>

<style scoped>

</style>
