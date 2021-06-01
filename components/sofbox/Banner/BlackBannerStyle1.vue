<template>
  <div class=" iq-breadcrumb main-bg">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 ">
          <div class="iq-mb-0">
            <h2 class="text-white">
              {{ title }}
            </h2>
          </div>
        </div>
        <div class="col-lg-6 ">
          <nav aria-label="breadcrumb" class="float-right">
            <ol class="">
              <slot name="bannerLinks" />
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlackbannerStyle1',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
