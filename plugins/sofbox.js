import Vue from 'vue'
import _ from 'lodash'
import retina from 'retinajs'
import VueRetina from 'vue-retina'
// eslint-disable-next-line import/no-named-as-default
import BootstrapVue from 'bootstrap-vue'
// eslint-disable-next-line import/no-named-as-default,no-unused-vars
let skrollrJs
if (typeof window !== 'undefined') {
  require('bootstrap')
  skrollrJs = require('skrollr')
  require('magnific-popup/dist/jquery.magnific-popup.min')
  require('jquery.appear')
}
Vue.use(BootstrapVue)
Vue.use(VueRetina, { retina })

const components = require.context('@/components/sofbox')
_.forEach(components.keys(), (fileName) => {
  const componentConfig = components(fileName)
  const componentName = fileName.split('/').pop().split('.')[0]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
