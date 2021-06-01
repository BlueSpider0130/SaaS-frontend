<template>
  <div>
    <section id="how-it-works" class="overview-block-ptb it-works">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="heading-title">
              <h3 class="title iq-tw-7">What is sofbox ?</h3>
              <p>Sofbox is a sleek, clean and powerful landing page template</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <CardStyle5 step="1">
              <img slot="cardMedia" src="../../assets/images/services/icon1.png" class="img-fluid" alt="#">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  Easy to Customize
                </h5>
                <p>Sofbox allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-4 r-mt-30">
            <CardStyle5 step="2">
              <img slot="cardMedia" src="../../assets/images/services/icon2.png" class="img-fluid" alt="#">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  Multipurpose layout
                </h5>
                <p>Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.</p>
              </div>
            </CardStyle5>
          </div>
          <div class="col-md-12 col-lg-4 r-mt-30">
            <CardStyle5 step="3">
              <img slot="cardMedia" src="../../assets/images/services/icon3.png" class="img-fluid" alt="#">
              <div slot="cardBody">
                <h5 class="iq-tw-7 iq-mt-25 iq-mb-15">
                  Unique Design
                </h5>
                <p>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.</p>
              </div>
            </CardStyle5>
          </div>
        </div>
      </div>
    </section>
    <SectionStyle1>
      <div slot="cardBody" class="col-lg-6">
        <div class="heading-title left text-left">
          <h3 class="iq-tw-7 iq-mb-25 title">
            What can sofbox do ?
          </h3>
        </div>
        <p>With sofbox you can create beautiful and elegant websites that suits your business. </p>
        <p class="iq-mt-20">
          You can fully customize the template with ease. Every page is fully responsive and retina ready which makes your creation look good on any device.
        </p>
        <h6 class="iq-tw-6 iq-mb-15 iq-mt-25">
          Discover our best ever services.
        </h6>
        <a href="javascript:void(0)" class="button iq-mt-20">Click Here</a>
      </div>
      <div slot="cardMedia" class="col-lg-6 align-self-center">
        <img class="iq-works-img pull-right img-fluid" src="../../assets/images/drive/01.png" alt="drive01">
      </div>
    </SectionStyle1>
    <SectionStyle2 id="software-features" :small="small">
      <div slot="cardMedia" class="iq-software-demo">
        <img class="img-fluid" src="../../assets/images/drive/05.png" alt="drive05">
      </div>
      <div slot="cardBody" class="col-lg-6 offset-lg-6">
        <div class="heading-title left text-left">
          <h3 class="iq-tw-7 iq-mb-25 title">
            Software Features
          </h3>
        </div>
        <p>Software provides you with many features that will help you to keep track and keep records of your business. Software is designed and build as per the customers requirement. </p>
        <ul class="iq-mt-40 iq-list">
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">To keep records of customers such as contact information, support interactions and statistical data. </span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">It keeps information which can be retrieved when required.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">Software must be effective to gather, combine and analyze data so you can reveal crucial insights in making decisions.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">The software built should support your business as it grows so that you don't have to transfer to another software and start from scratch.</span>
          </li>
          <li class="iq-tw-6 iq-mb-15">
            <i class="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30"></i><span class="iq-font-black">The software should be able to add more users, provide advanced features, and give security</span>
          </li>
        </ul>
      </div>
    </SectionStyle2>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      small: true
    }
  }
}
</script>
