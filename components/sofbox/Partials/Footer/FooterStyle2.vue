<template>
  <footer id="contact" class="iq-footerr iq-pt-40">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
          <div class="logo">
            <img :src="image" class="img-fluid logo_img" alt="#">
            <div class="iq-font-black  iq-mt-15">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
          <div class="contact-bg">
            <h5 class="iq-tw-6 iq-font-black  iq-mb-10">
              Address
            </h5>
            <ul class="iq-contact">
              <li>
                <i class="ion-ios-location-outline" />
                <p>1234 North Luke Lane, South Bend, IN 360001</p>
              </li>
              <li>
                <i class="ion-ios-telephone-outline" />
                <p>+0123 456 789</p>
              </li>
              <li>
                <i class="ion-ios-email-outline" />
                <p>mail@sofbox.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
          <h5 class="iq-tw-6 iq-font-black  iq-mb-10">
            Menu
          </h5>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ul class="menu">
                <li><a href="javascript:void(0)">Home</a></li>
                <li><a href="javascript:void(0)">About Us</a></li>
                <li><a href="javascript:void(0)">Our Team</a></li>
                <li><a href="javascript:void(0)">Portfolio</a></li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ul class="menu">
                <li><a href="javascript:void(0)">Faqs</a></li>
                <li><a href="javascript:void(0)">Blog</a></li>
                <li><a href="javascript:void(0)">Our Services</a></li>
                <li><a href="javascript:void(0)">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 iq-mtb-20">
          <h5 class="iq-tw-6 iq-font-black  iq-mb-10">
            Help
          </h5>
          <ul class="office-day">
            <li>
              <a href="javascript:void(0)">Help Center</a>
            </li>
            <li>
              <a href="javascript:void(0)">Product</a>
            </li>
            <li>
              <a href="javascript:void(0)">Tool</a>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row iq-mt-20">
        <div class="col-auto mr-auto">
          <ul class="link">
            <li class="d-inline-block iq-mr-20">
              <a href="javascript:void(0)">Term and Condition</a>
            </li>
            <li class="d-inline-block">
              <a href="javascript:void(0)"> Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="col-auto">
          <div class="iq-copyright ">
            @ 2018 <a href="index-11.html">Sofbox</a> All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterStyle2',
  data () {
    return {
      image: require('../../../../assets/images/color-customizer/color-1.png')
    }
  }
}
</script>
