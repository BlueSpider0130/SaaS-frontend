<template>
  <div class="comments-box position-relative" :Class="className">
    <div class="media">
      <slot name="cardMedia" />
      <div class="media-body">
        <slot name="cardHeader" />
        <div class="clearfix" />
        <slot name="cardBody" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlackCardStyle6',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
