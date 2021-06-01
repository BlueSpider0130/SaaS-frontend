<template>
  <section class="overview-block-ptb white-bg iq-asked">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">
              Frequently Asked Questions
            </h3>
            <p>Here you can find solution to your questions or queries for template.</p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-12 col-lg-6">
          <img class="img-fluid center-block" :src="require('../../assets/images/drive/10.png')" alt="drive10" style="z-index: 9; position: relative;">
        </div>
        <div class="col-md-12 col-lg-6">
          <div class="iq-accordion">
            <div class="iq-accordion accordion-active">
              <a href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Can sofbox be used for any business ?</a>
              <div class="accordion-details">
                <div class="row">
                  <div class="col-sm-3">
                    <img alt="#" class="img-fluid" :src="require('../../assets/images/blog/01.jpg')">
                  </div>
                  <div class="col-sm-9">
                    Yes. You can use this template for any business and can be customized as per your needs.
                  </div>
                </div>
              </div>
            </div>
            <div class="iq-accordion">
              <a href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Is sofbox template responsive ?</a>
              <div class="accordion-details">
                Yes. Every page is fully responsive and retina ready, which makes your creation look good on any device.
              </div>
            </div>
            <div class="iq-accordion">
              <a href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Can we change the color scheme ?</a>
              <div class="accordion-details">
                <div class="row">
                  <div class="col-sm-9">
                    Yes. You can change the color scheme of the website. There is customizer available from which you can change the websites color.
                  </div>
                  <div class="col-sm-3">
                    <img alt="#" class="img-fluid" :src="require('../../assets/images/blog/01.jpg')">
                  </div>
                </div>
              </div>
            </div>
            <div class="iq-accordion">
              <a href="javascript:void(0)" class="accordion-title iq-tw-7 iq-font-grey">Are the sections customizable ?</a>
              <div class="accordion-details">
                Yes. You can choose the layout and change the sections as per your needs. You can also choose pre-made useful elements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="iq-objects-asked">
      <span class="iq-objects-01">
        <img :src="require('../../assets/images/drive/02.png')" alt="drive02">
      </span>
      <span class="iq-objects-02" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
        <img :src="require('../../assets/images/drive/04.png')" alt="drive02">
      </span>
      <span class="iq-objects-03 iq-fadebounce">
        <span class="iq-round" />
      </span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Faq'
}
</script>
