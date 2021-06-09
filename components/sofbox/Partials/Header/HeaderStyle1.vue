<template>
  <!-- Header -->
  <header id="main-header" :class="className">
    <slot name="topBar" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              <img :id="styledLogo ? 'logo_img' : ''" class="img-fluid" :src="logoImg" alt="#">
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="ion-navicon" />
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto w-100 justify-content-end menu">
                <li v-for="(option,index) in navItemList" :key="index" class="nav-item menu-item">
                  <a class="nav-link" :class="option.active !== undefined && option.active ? ' active ' : ''" :href="option.href" @click="jumpTo(option.href)">
                    {{ option.title }}
                    <i v-if="option.children" class="fa fa-angle-down toggledrop" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <nuxt-link to="/signin-page" class="nav-link button bt-black iq-mt-5">
                Signin
              </nuxt-link>
              <slot name="navContent" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>

<script>
const $ = require('jquery')
export default {
  name: 'HeaderStyle1',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    className: String,
    // eslint-disable-next-line vue/require-default-prop
    logoImg: String,
    // eslint-disable-next-line no-undef,vue/require-default-prop
    navItemList: Array,
    // eslint-disable-next-line vue/require-default-prop,vue/require-prop-types
    styledLogo: { Boolean: true }
  },
  created () {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  methods: {
    onActivate (target) {
      console.log('Received event: "bv::scrollspy::activate" for target ', target)
    },
    jumpTo (href) {
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 1500)
    }
  }
}
</script>
