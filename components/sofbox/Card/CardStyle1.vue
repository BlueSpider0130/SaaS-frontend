<template>
  <div class="iq-blog-box">
    <div class="iq-blog-image clearfix">
      <div class="media-wrapper">
        <slot name="cardMedia" />
      </div>
    </div>
    <div class="iq-blog-detail">
      <div class="blog-title">
        <slot name="cardTitle" />
      </div>
      <div class="blog-content">
        <slot name="cardBody" />
      </div>
      <div class="iq-blog-meta">
        <slot name="cardFooter" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardStyle1'
}
</script>
