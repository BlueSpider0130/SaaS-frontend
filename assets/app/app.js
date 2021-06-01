const $ = require('jquery')
let tpj
let WOW
let $skrollr
let scroll
if (typeof window !== 'undefined') {
  const $ = require('jquery')
  window.$ = $
  window.jQuery = $
  tpj = $.noConflict()
  WOW = require('wowjs')
  scroll = require('../../assets/sofbox-v2/js/scrollme')
  $skrollr = require('skrollr')
  require('owl.carousel/dist/owl.carousel')
  require('jarallax/dist/jarallax.min')
  require('isotope-layout')
  require('magnific-popup/dist/jquery.magnific-popup.min')
  import('../../static/revslider/js/revolution.tools.min')
  import('../../static/revslider/js/rs6.min')
  import('../../static/isotop/js/isotope.pkgd.min')
  import('../../static/isotop/js/isotope.pkgd.min')
  import('../sofbox-v2/js/semantic-ui-range')
}
export const sofbox = {
  index () {
    this.loaderInit()
    this.onScroll()
    this.toggleDropdown()
    this.skrollr()
    this.checkElement()
    this.jarallax()
    this.accordion()
    this.wowInit()
    this.isotope()
    this.owlCarousel()
    this.featureBoxEffect()
  },
  scrollme () {
    setTimeout(() => {
      scroll.default.init()
    }, 1050)
  },
  featureBoxEffect () {
    $('.feature-box-effect').mouseenter(function () {
      $('.selected').removeClass('selected').addClass('feature-box-effect')
      $(this).removeClass('feature-box-effect').addClass('selected')
    })
  },
  revslider_showDoubleJqueryError (sliderID) {
    let err = "<div class='rs_error_message_box'>"
    err += "<div class='rs_error_message_oops'>Oops...</div>"
    err += "<div class='rs_error_message_content'>"
    err += 'You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>'
    err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
    err += '<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it'
    err += '</div>'
    err += '</div>'
    // eslint-disable-next-line no-undef
    $(sliderID).show().html(err)
  },
  initRevSlider1 () {
    if (tpj('#rev_slider_1_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSlider1()
      }, 100)
    } else {
      tpj('#rev_slider_1_1')
        .show()
        .revolution({
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
  },
  initRevSliderPaymentSoftware () {
    if (tpj('#rev_slider_3_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderPaymentSoftware()
      }, 100)
    } else {
      tpj('#rev_slider_3_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1500,1500,778,480',
        gridheight: '600,600,500,400',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '600,768,400,400',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        parallax: {
          levels: [5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 48, 49, 50, 51, 30],
          type: 'scroll',
          origo: 'slideCenter',
          speed: 0,
          speedls: '1000ms'
        },
        sbtimeline: {
          set: true
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderCloudHosting () {
    if (tpj('#rev_slider_8_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderCloudHosting()
      }, 100)
    } else {
      tpj('#rev_slider_8_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1600,1600,776,480',
        gridheight: '700,700,600,500',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '700,768,600,500',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderHelpDesk () {
    if (tpj('#rev_slider_4_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderHelpDesk()
      }, 100)
    } else {
      tpj('#rev_slider_4_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1240,1024,778,480',
        gridheight: '900,768,500,500',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '900,768,500,500',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderSaasMain () {
    if (tpj('#rev_slider_6_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderSaasMain()
      }, 100)
    } else {
      tpj('#rev_slider_6_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1600,1024,778,480',
        gridheight: '850,500,500,400',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '850,500,500,400',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderTwo () {
    if (tpj('#rev_slider_9_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderTwo()
      }, 100)
    } else {
      tpj('#rev_slider_9_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1600,1600,776,480',
        gridheight: '700,700,600,500',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '700,768,600,500',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderSaasThree () {
    if (tpj('#rev_slider_5_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderSaasThree()
      }, 100)
    } else {
      tpj('#rev_slider_5_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1024,778,480',
        gridwidth: '1600,1024,778,480',
        gridheight: '1000,768,500,400',
        spinner: 'spinner0',
        editorheight: '1000,768,500,400',
        responsiveLevels: '1240,1024,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderFour () {
    if (tpj('#rev_slider_7_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderFour()
      }, 100)
    } else {
      tpj('#rev_slider_7_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1240,1240,778,480',
        gridheight: '450,450,400,400',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '450,768,400,400',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderFive () {
    if (tpj('#rev_slider_10_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderFive()
      }, 100)
    } else {
      tpj('#rev_slider_10_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1600,1600,778,480',
        gridheight: '850,850,700,500',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '850,768,700,500',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  initRevSliderSix () {
    if (tpj('#rev_slider_11_1').revolution === undefined) {
      setTimeout(() => {
        this.initRevSliderSix()
      }, 100)
    } else {
      tpj('#rev_slider_11_1').show().revolution({
        jsFileLocation: '../static/assets/revslider/js/',
        sliderLayout: 'fullwidth',
        visibilityLevels: '1240,1240,778,480',
        gridwidth: '1240,1240,778,480',
        gridheight: '1000,1000,600,550',
        minHeight: '',
        spinner: 'spinner0',
        editorheight: '1000,768,600,550',
        responsiveLevels: '1240,1240,778,480',
        disableProgressBar: 'on',
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      })
    }
  },
  loaderInit () {
    $('#load').fadeOut()
    $('#loading').delay(1000).fadeOut('slow')
  },

  onScroll () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
        $('header').addClass('menu-sticky')
      } else {
        $('header').removeClass('menu-sticky')
      }
    })
    $('#back-to-top').fadeOut()
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 250) {
        $('#back-to-top').fadeIn(1400)
      } else {
        $('#back-to-top').fadeOut(400)
      }
    })
    $('.nav-link').click(function (event) {
      event.preventDefault()
    })
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh')
    })
  },

  wowInit () {
    const elementExist = this.checkElement('class', 'wow')

    if (elementExist) {
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        live: false
      }).init()
    }
  },

  toggleDropdown () {
    $('#main-header .menu-item .toggledrop').off('click')
    if ($(window).width() < 992) {
      $('#main-header .menu-item .toggledrop').on('click', function (e) {
        e.preventDefault()
        $(this).closest('li').find('.sub-menu').toggle('d-block')
      })
    }
    $(window).on('resize', function () {
      'use strict'
      $('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on(
        'click',
        function () {
          $(this).closest('li').find('.sub-menu').toggle('d-block')
        }
      )
      $('#main-header .menu-item .toggledrop').off('click')
      if ($(window).width() < 992) {
        $('#main-header .menu-item .toggledrop').on('click', function (e) {
          e.preventDefault()
          $(this).closest('li').find('.sub-menu').toggle('d-block')
        })
      }
    })
    $('.nav-item.dropdown').mouseenter(function () {
      $(this).addClass('menu-show')
    })

    $('.nav-item.dropdown').mouseleave(function () {
      $(this).removeClass('menu-show')
    })
  },
  isotope () {
    /* ------------------------
          2 Isotope
    -------------------------- */
    const elementExist = this.checkElement('class', 'isotope')
    if (elementExist) {
      // eslint-disable-next-line no-undef
      $('.isotope').isotope({
        itemSelector: '.iq-grid-item'
      })

      // filter items on button click
      $('.isotope-filters').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter')
        $('.isotope').isotope({
          resizable: true,
          filter: filterValue,
          layoutMode: 'cellsByRow'
        })
        $('.isotope-filters button').removeClass('active')
        $(this).addClass('active')
      })
    }

    /* ------------------------
          3 Masonry
    -------------------------- */

    const elementExist1 = this.checkElement('class', 'iq-masonry-block')
    if (elementExist1) {
      const $msnry = $('.iq-masonry-block .iq-masonry')
      if ($msnry) {
        const $filter = $('.iq-masonry-block .isotope-filters')
        $msnry.isotope({
          percentPosition: true,
          resizable: true,
          itemSelector: '.iq-masonry-block .iq-masonry-item',
          masonry: {
            gutterWidth: 0
          }
        })

        // bind filter button click
        $filter.on('click', 'button', function () {
          const filterValue = $(this).attr('data-filter')
          $msnry.isotope({
            filter: filterValue
          })
        })

        $filter.each(function (i, buttonGroup) {
          const $buttonGroup = $(buttonGroup)
          $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.active').removeClass('active')
            $(this).addClass('active')
          })
        })
      }
    }
  },
  skrollr () {
    // const $skrollr = window.skrollr
    $skrollr.init().destroy()
    $skrollr.init({
      forceHeight: false,
      easings: {
        easeOutBack (p, s) {
          s = 1.70158
          p = p - 1
          return p * p * ((s + 1) * p + s) + 1
        }
      },
      mobileCheck () {
        return false
      }
    })
  },

  checkElement (type, element) {
    let found = false
    let elements
    switch (type) {
      case 'class':
        elements = document.getElementsByClassName(element)

        if (
          elements !== undefined &&
          elements !== null &&
          elements.length > 0
        ) {
          found = true
        }
        break

      case 'id':
        elements = document.getElementById(element)

        if (elements !== undefined && elements !== null) {
          found = true
        }
        break
    }

    return found
  },
  jarallax () {
    // eslint-disable-next-line no-undef
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    })
  },
  accordion () {
    $('.iq-accordion .iq-accordion-block .accordion-details').hide()
    $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow')
    $('.iq-accordion .iq-accordion-block').on('click', function () {
      if ($(this).children('div.accordion-details ').is(':hidden')) {
        $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow')
        $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow')
      }
    })
  },
  progressBar () {
    $('.progressbar-circle').each(function () {
      const elementPos = $(this).offset().top
      const topOfWindow = $(window).scrollTop()
      const percent = $(this).find('.circle').attr('data-percent')
      const animate = $(this).data('animate')
      if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
        $(this).data('animate', true)
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 10,
          fill: {
            color: '#6f73f0'
          }
        }).stop()
        $(this).find('.circle.purple-hover').circleProgress({
          fill: {
            color: '#6f73f0'
          }
        })
        $(this).find('.circle.org-hover').circleProgress({
          fill: {
            color: '#ff796d'
          }
        })
        $(this).find('.circle.green-hover').circleProgress({
          fill: {
            color: '#33e2a0'
          }
        })
      }
    })
  },

  progress () {
    $('.iq-progress-bar > span').each(function() {
      var jQuerythis = $(this);
      var width = $(this).data('percent');
      jQuerythis.css({
          'transition': 'width 2s'
      });
      setTimeout(function() {
          jQuerythis.appear(function() {
              jQuerythis.css('width', width + '%');
          });
      }, 500);
  });
  },
  magnific () {
    $('.popup-gallery').magnificPopup({
      delegate: 'a.popup-img',
      tLoading: 'Loading image #%curr%...',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        navigateByImgClick: true,
        enabled: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    })

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      disableOn: 700,
      mainClass: 'mfp-fade',
      preloader: false,
      removalDelay: 160,
      fixedContentPos: false
    })
  },
  owlCarousel () {
    const elementExist = this.checkElement('class', 'owl-carousel')
    if (elementExist) {
      $('.owl-carousel').each(function () {
        const $carousel = $(this)
        $carousel.owlCarousel({
          items: $carousel.data('items'),
          loop: $carousel.data('loop'),
          margin: $carousel.data('margin'),
          nav: $carousel.data('nav'),
          dots: $carousel.data('dots'),
          autoplay: $carousel.data('autoplay'),
          autoplayTimeout: $carousel.data('autoplay-timeout'),
          navText: [
            '<i class="fas fa-angle-left fa-2x"></i>',
            '<i class="fas fa-angle-right fa-2x"></i>'
          ],
          responsiveClass: true,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: $carousel.data('items-mobile-sm')
            },
            // breakpoint from 480 up
            480: {
              items: $carousel.data('items-mobile')
            },
            // breakpoint from 786 up
            786: {
              items: $carousel.data('items-tab')
            },
            // breakpoint from 1023 up
            1023: {
              items: $carousel.data('items-laptop')
            },
            1199: {
              items: $carousel.data('items')
            }
          }
        })
      })
    }
  },
  activeTabPane () {
    $('li a').click(function (e) {
      e.preventDefault()
      $('a').removeClass('active1')
      $(this).addClass('active1')
    })
  },
  pricingProcess () {
    const count_tabs = $('#count-tabs').val()
    for (var i = 0; i <= count_tabs; i++) {
      var maxnumber = $('#number_user_' + i).val()
      $('#user_range_' + i).range({
        min: 1,
        max: maxnumber,
        start: 1,
        step: 1,
        input: '#user_text_' + i
      })
    }
    for (var i = 0; i <= count_tabs; i++) {
      var maxnumber = $('#number_time' + i).val()
      $('#time_range_' + i).range({
        min: 1,
        max: maxnumber,
        start: 1,
        step: 1,
        input: '#time_text_' + i
      })
    }
    $('.input-range').on('click mousemove', function () {
      const check = $(this).attr('id')
      const id = $(this).attr('id').match(/\d+/)
      const user_range = $('#user_range_' + id)
      const time_range = $('#time_range_' + id)
      const user_text = $('#user_text_' + id)
      const time_text = $('#time_text_' + id)
      const total = $('#total_' + id)
      const base = $('#base_' + id)
    })
    $('.price-checkbox').on('click', function () {
      const a = []
      const id = $(this).attr('primary').match(/\d+/)
      let price = 0
      const user_range = $('#user_range_' + id)
      const time_range = $('#time_range_' + id)
      const user_text = $('#user_text_' + id)
      const time_text = $('#time_text_' + id)
      const total = $('#total_' + id)
      const base = $('#base_' + id)
      $('.chk_' + id + ':checked').each(function () {
        price += parseInt($(this).val())
      })
      base.val(price)
      total.val(user_text.val() * time_text.val() * base.val())
      console.log(price)
    })
  }
}
