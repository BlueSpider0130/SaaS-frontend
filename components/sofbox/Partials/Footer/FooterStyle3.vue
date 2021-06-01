<template>
  <section class="footer-info iq-pt-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="iq-footer-box text-left">
            <div class="iq-icon">
              <i aria-hidden="true" class="ion-ios-location-outline" />
            </div>
            <div class="footer-content">
              <h4 class="iq-tw-7 iq-pb-10">
                Address
              </h4>
              <slot name="address" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 r4-mt-30">
          <div class="iq-footer-box text-left">
            <div class="iq-icon">
              <i aria-hidden="true" class="ion-ios-telephone-outline" />
            </div>
            <div class="footer-content">
              <h4 class="iq-tw-7 iq-pb-10">
                Phone
              </h4>
              <slot name="phone" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 r-mt-30">
          <div class="iq-footer-box text-left">
            <div class="iq-icon">
              <i aria-hidden="true" class="ion-ios-email-outline" />
            </div>
            <div class="footer-content">
              <h4 class="iq-tw-7 iq-pb-10">
                Mail
              </h4>
              <slot name="mail" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 r-mt-30">
          <ul class="info-share">
            <slot name="links" />
          </ul>
        </div>
        <slot />
      </div>
      <div class="row iq-mt-40">
        <div class="col-sm-12 text-center">
          <div class="footer-copyright iq-ptb-20">
            © <span id="copyright"> 2019</span> <a href="javascript:void(0)" class="text-green">Sofbox.</a> All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterStyle3'
}
</script>
