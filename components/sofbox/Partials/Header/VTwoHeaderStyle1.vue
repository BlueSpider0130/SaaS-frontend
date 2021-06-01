<template>
  <header id="main-header" :Class="className">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <nuxt-link class="navbar-brand" to="/saas-main">
              <img :id="styledLogo ? 'logo_img' : ''" :src=" logoImg " class="img-fluid logo" alt="img">
              <img class="img-fluid sticky-logo" :src="logoWhite" alt="img">
            </nuxt-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="menu-btn" class="menu-btn d-inline-block" @click="toggleClass">
                <span class="line" />
                <span class="line" />
                <span class="line" />
              </span>
              <span class="ion-navicon" />
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto w-100 justify-content-end">
                <template v-for="(option,index) in navItemList">
                  <li v-if="option.children" :key="index" class="nav-item dropdown">
                    <a
                      :id="'navbarDropdown' + index "
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {{ option.title }}
                    </a>
                    <div class="dropdown-menu" :aria-labelledby="'navbarDropdown' + index">
                      <nuxt-link v-for="(child, index1) in option.child" :key="index1" :to="child.href" class="dropdown-item">
                        {{ child.title }}
                      </nuxt-link>
                    </div>
                  </li>
                  <li v-else :key="index" class="nav-item">
                    <a v-if="!option.redirect" :class="`nav-link ${option._is_active !== undefined && option._is_active ? 'active' : '' }`" :href="option.href" @click="jumpTo(option.href)">
                      {{ option.title }}
                    </a>
                    <nuxt-link v-else :to="option.href" class="nav-link">
                      {{ option.title }}
                    </nuxt-link>
                  </li>
                </template>
              </ul>
            </div>
            <div class="sub-main">
              <ul class="shop_list">
                <li class="search-btn list-inline-item">
                  <div class="search-box">
                    <form method="get" class="search-form" action="#">
                      <label for="search-form-5e7adc86eded3">
                        <span class="screen-reader-text">Search for:</span>
                      </label>
                      <input
                        id="search-form-5e7adc86eded3"
                        type="search"
                        class="search-field"
                        placeholder="Search"
                        value=""
                        name="s"
                      >
                      <button type="submit" class="search-submit">
                        <i class="fa fa-search" /><span class="screen-reader-text">Search</span>
                      </button>
                    </form>
                  </div>
                </li>
                <li class="cart-btn list-inline-item">
                  <div class="cart_count">
                    <a class="parents mini-cart-count" href="#">
                      <i class="fa fa-shopping-cart" />
                      <div id="mini-cart-count">
                        0
                      </div>
                    </a>
                  </div>
                </li>
                <slot name="button" />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
const $ = require('jquery')
export default {
  name: 'VTwoHeaderStyle1',
  props: {
    className: { type: String, default: '' },
    logoImg: { type: String, default: '' },
    logoWhite: { type: String, default: '' },
    navItemList: { type: Array, default: () => [] },
    styledLogo: { type: Boolean, default: false }
  },
  created () {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  methods: {
    onActivate (target) {
    },
    jumpTo (href) {
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 1500)
    },

    toggleClass () {
      $('.menu-btn').click(function () {
        $(this).toggleClass('is-active')
      })
    }
  }
}
</script>
