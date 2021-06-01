<template>
  <div class="media">
    <div :class="mainclass">
      <div class="circle-icon">
        <i :class="icon" aria-hidden="true" />
      </div>
    </div>
    <div class="media-body">
      <h5 class="color-text mb-2">
        {{ title }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VTwoCardStyle3',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    // eslint-disable-next-line vue/require-default-prop
    icon: String,
    // eslint-disable-next-line vue/require-default-prop
    mainclass: String
  }
}
</script>
