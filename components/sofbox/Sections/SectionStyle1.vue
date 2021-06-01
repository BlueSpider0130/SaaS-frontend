<template>
  <section class="how-works overview-block-ptb">
    <div class="container">
      <div class="row flex-row-reverse">
        <slot name="cardMedia" />
        <slot name="cardBody" />
        <div class="iq-objectsnew">
          <span class="iq-objects-02" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
            <img src="../../../assets/images/drive/03.png" class="img-fluid" alt="drive02">
          </span>
          <span class="iq-objects-03" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
            <img src="../../../assets/images/drive/04.png" class="img-fluid" alt="drive02">
          </span>
          <span class="iq-objects-04 iq-fadebounce">
            <span class="iq-round"></span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionStyle1'
}
</script>
