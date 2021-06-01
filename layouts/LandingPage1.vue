<template>
  <div data-spy="scroll" data-offset="80">
    <Loader />
    <HeaderStyle1 :logo-img="logo" :nav-item-list="navItems" :styled-logo="styleLogo" />
    <nuxt />
  </div>
</template>
<script>
import logoImg from '../assets/images/logo.png'
import { menu } from '~/config/constant'
import "../assets/css/color/style.css";

export default {
  name: 'LandingPage1',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        {
          href: '#iq-home',
          title: 'Home',
          active: false,
          children: false,
          child: menu
        },
        { href: '#how-it-works', title: 'About' },
        { href: '#software-features', title: 'Service' },
        /* { href: '#great-screenshots', title: 'Screenshots' }, */
        { href: '#pricing', title: 'Pricing' },
        { href: '#team', title: 'Team' },
        { href: '#blog', title: 'Blog' },
        { href: '#contact-us', title: 'Contact' },
      ]
    }
  },
  mounted () {
  },
  head () {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-offset': '80'
      }
    }
  }
}
</script>
<style scoped>
  /* @import url('../assets/css/color/style.css'); */
  .wow {
    visibility: hidden;
  }
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      -ms-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }
  }

  .fadeInUp {
    animation-name: fadeInUp;
    animation-timing-function: ease-out;
  }
</style>
