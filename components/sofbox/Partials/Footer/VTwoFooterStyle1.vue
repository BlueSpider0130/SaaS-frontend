<template>
  <footer class="iq-footer iq-border-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6  iq-rmb-50">
          <div class="logo">
            <a href="index.html"><img :src=" footerLogo" class="img-fluid" alt="img"></a>
            <div class="iq-font-black mt-2">
              {{ footerText }}
            </div>
            <div class="iq-copyright mt-5">
              Copyright @ 2018 <a href="#">Sofbox</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
          <h5 class="mb-4">
            Menu
          </h5>
          <ul class="menu">
            <slot name="menu" />
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <h5 class="mb-4">
            About Us
          </h5>
          <ul class="menu">
            <slot name="aboutus" />
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <h5 class="mb-4">
            Quick Links
          </h5>
          <ul class="menu">
            <slot name="quicklink" />
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'VTwoFooterStyle1',
  // eslint-disable-next-line vue/require-prop-types
  props: ['footerLogo', 'footerText']
}
</script>
