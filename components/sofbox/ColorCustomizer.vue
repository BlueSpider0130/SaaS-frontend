<template>
  <div class="iq-customizer" :class="panel">
    <div class="buy-button">
      <a class="opener" href="javascript:void(0)" @click="toggle()"><i class="fa fa-spinner fa-spin" /></a>
    </div>
    <div class="clearfix content-chooser">
      <h3 class="iq-font-black">
        Sofbox Awesome Color
      </h3>
      <p>This color combo available inside whole template. You can change on your wish, Even you can create your own with limitless possibilities! </p>
      <ul class="iq-colorChange clearfix">
        <li v-for="(color,index) of colors"
            :key="index"
            :class="(color.selected) ? 'selected' : ''"
            :style="'backgroundColor:'+color.code"
            @click="styleChange(color)"></li>
      </ul>
    </div>
  </div>
</template>
<script>
const $ = require('jquery')
export default {
  name: 'ColorCustomizer',
  data () {
    return {
      panel: 'closed',
      colors: [
        { code: '#4ac4f3', rgb: '74, 196, 243', image: 'color-1', selected: 1 },
        { code: '#8c79f7', rgb: '140, 121, 247', image: 'color-2', selected: 0 },
        { code: '#3b90fd', rgb: '59, 144, 253', image: 'color-3', selected: 0 },
        { code: '#f46d4f', rgb: '244, 109, 79', image: 'color-4', selected: 0 },
        { code: '#01dabb', rgb: '1, 218, 187', image: 'color-5', selected: 0 },
        { code: '#7570ff', rgb: '117, 112, 255', image: 'color-6', selected: 0 },
        { code: '#4a2fb4', rgb: '74, 47, 180', image: 'color-7', selected: 0 },
        { code: '#80c02b', rgb: '128, 192, 43', image: 'color-8', selected: 0 },
        { code: '#04cae7', rgb: '4, 202, 231', image: 'color-9', selected: 0 },
        { code: '#7fc129', rgb: '127, 193, 41', image: 'color-10', selected: 0 },
        { code: '#ff5033', rgb: '255, 80, 51', image: 'color-11', selected: 0 },
        { code: '#f8a4d8', rgb: '248, 164, 216', image: 'color-12', selected: 0 },
        { code: '#1edae6', rgb: '30, 218, 230', image: 'color-13', selected: 0 },
        { code: '#1ad993', rgb: '26, 217, 147', image: 'color-14', selected: 0 }
      ]
    }
  },
  methods: {
    toggle () {
      this.style_switcher = $('.iq-customizer')
      const panelWidth = this.style_switcher.outerWidth(true)
      if (this.panel === 'closed') {
        this.panel = 'opened'
        this.style_switcher.animate({ right: '0px' })
      } else {
        this.panel = 'closed'
        this.style_switcher.animate({ right: '-' + panelWidth })
      }
    },
    styleChange (color) {
      document.documentElement.style.setProperty('--primary-theme-color', color.code)
      document.documentElement.style.setProperty('--primary-rgb-theme-color', color.rgb)
      $('#logo_img').attr('src', require('assets/images/color-customizer/' + color.image + '.png'))
      this.colors.filter(item => item.selected === 1)[0].selected = 0
      const i = this.colors.indexOf(color)
      this.colors[i].selected = 1
    }
  }
}
</script>
