<template>
  <div class="text-left iq-breadcrumb-one iq-bg-over">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-12">
          <nav aria-label="breadcrumb" class="text-center iq-breadcrumb-two">
            <h2 class="title-breadcrumb">
              {{ title }}
            </h2>
            <ol class="breadcrumb main-bg">
              <li class="breadcrumb-item">
                <a href="#"><i class="fa fa-home mr-1" aria-hidden="true" />Home</a>
              </li>
              <li class="breadcrumb-item active">
                {{ title }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
