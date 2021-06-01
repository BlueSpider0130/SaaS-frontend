<template>
  <div class="bg-dark iq-ptb-10 header-top-bar">
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto mr-auto">
          <slot name="leftLinks" />
        </div>
        <div class="col-auto">
          <div class="social-bar">
            <slot name="rightLinks" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopbarStyle1'
}
</script>
