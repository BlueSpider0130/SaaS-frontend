const $ = require('jquery')
if (typeof window !== 'undefined') {
  const $ = require('jquery')
  window.$ = $
  window.jQuery = $
import('../../static/revslider/js/revolution.tools.min')
import('../../static/revslider/js/rs6.min')

}
export const revslider_showDoubleJqueryError =  (sliderID) => {
    let err = "<div class='rs_error_message_box'>"
    err += "<div class='rs_error_message_oops'>Oops...</div>"
    err += "<div class='rs_error_message_content'>"
    err += 'You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>'
    err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
    err += '<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it'
    err += '</div>'
    err += '</div>'
    $(sliderID).show().html(err)
  }
//saas-nine
export const rev_slider_3_1 = () => {
    let revapi1, tpj
    tpj = $.noConflict()
    if (tpj('#rev_slider_3_1').revolution === undefined) {
        revslider_showDoubleJqueryError();
    } else {
      revapi1 = tpj('#rev_slider_3_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderType: 'standard',
        sliderLayout: 'fullwidth',
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1400, 1024, 767, 479],
        gridheight: [600, 600, 800, 600],
        minHeight: '',
        autoHeight: true,
        lazyType: 'smart',
        spinner: 'spinner0',
        editorheight: [600, 600, 800, 600],
        responsiveLevels: [1240, 1024, 778, 480],
        disableProgressBar: 'on',
        navigation: {
          mouseScrollNavigation: false,
          touch: {
            touchenabled: true
          }
        },
        parallax: {
          levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
          type: 'mouse'
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
}
