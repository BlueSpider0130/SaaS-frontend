<template>
  <div id="back-to-top" style="display: none;">
    <a id="top" class="top" href="javascript:void(0)" @click="scrollTop()">
      <i class="ion-ios-arrow-up" />
    </a>
  </div>
</template>
<script>
const $ = require('jquery')
export default {
  name: 'ScrollTop',
  methods: {
    scrollTop () {
      $('body,html').animate(
        {
          scrollTop: 0
        },
        800
      )
    }
  }
}
</script>
