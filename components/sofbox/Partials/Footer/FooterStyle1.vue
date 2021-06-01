<template>
  <div id="contact" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-7 col-sm-12 text-left iq-font-dark">
          <div v-html="footerText" class="iq-ptb-20">
            © 2018 Sofbox Developed by <b>iqonicthemes</b>.
          </div>
        </div>
        <div class="col-md-5 col-lg-4 col-sm-12 align-self-center">
          <ul class="info-share text-center text-sm-right">
            <li v-for="(option,index) in socialNavItemList" :key="index">
              <a :href="option.href" v-html="option.icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterStyle1',
  // eslint-disable-next-line vue/require-prop-types
  props: ['footerText', 'socialNavItemList']
}
</script>
