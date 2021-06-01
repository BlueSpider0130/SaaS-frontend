<template>
  <section class="overview-block-ptb grey-bg iq-specialities">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">
              Sofbox Specialities
            </h3>
            <p>Sofbox is popular for the below specialities that can make your website look beautiful</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item,index) of list" :key="index" class="col-sm-12 col-lg-3 col-md-6 iq-mb-30">
          <CardStyle6>
            <i slot="cardMedia" aria-hidden="true" :class="item.icon"></i>
            <div slot="cardBody">
              <h5 class="iq-tw-7 iq-pt-20 iq-pb-10">
                {{ item.title }}
              </h5>
              <p>{{ item.description }}</p>
            </div>
          </CardStyle6>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Specialites',
  data () {
    return {
      list: [
        {
          icon: 'ion-ios-monitor-outline',
          title: 'High Resolution',
          description: 'Provided with high resolution images.'
        },
        {
          icon: 'ion-ios-settings',
          title: 'Color Schemes',
          description: 'You can use color schemes as you need.'
        },
        {
          icon: 'ion-social-googleplus-outline',
          title: 'Google Fonts',
          description: 'You can change the fonts of the website.'
        },
        {
          icon: 'ion-ios-heart-outline',
          title: 'Clean Codes',
          description: 'Clean code which can be understood.'
        },
        {
          icon: 'ion-ios-color-wand-outline',
          title: 'Responsive Design',
          description: 'Fully responsive and retina ready.'
        },
        {
          icon: 'ion-ios-checkmark-outline',
          title: 'Easy to Use',
          description: 'The template can be fully customizable with ease.'
        },
        {
          icon: 'ion-ios-photos-outline',
          title: 'Perfect Showcase',
          description: 'Template makes your website look beautiful.'
        },
        {
          icon: 'ion-ios-videocam-outline',
          title: 'Video Animation',
          description: 'You can also add videos to the website as you need.'
        }
      ]
    }
  }
}
</script>
