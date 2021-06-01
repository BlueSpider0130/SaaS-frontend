<template>
  <div class="blog-title-img text-center  ">
    <slot name="cardMedia" />
    <slot name="cardHeader" />
    <slot name="cardBody" />
    <ul class="social-links">
      <li><a href="#"><i class="fab fa-facebook-f" /></a></li>
      <li><a href="#"><i class="fab fa-twitter" /></a></li>
      <li><a href="#"><i class="fab fa-google-plus-g" /></a></li>
      <li><a href="#"><i class="fab fa-dribbble" /></a></li><li />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BlackListingStyle1'
}
</script>
