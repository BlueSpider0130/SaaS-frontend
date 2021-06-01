<template>
  <section :id="id" class="overview-block-ptb how-works ">
    <div class="container">
      <div class="row ">
        <slot name="cardMedia" />
        <slot name="cardBody" />
        <div :class="small ? 'iq-objects-software' : 'iq-objects-softwarenew'">
          <span class="iq-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-100px);">
            <img src="../../../assets/images/drive/03.png" alt="drive02">
          </span>
          <span class="iq-objects-02" data-bottom="transform:translatex(50px)" data-top="transform:translatex(-100px);">
            <img src="../../../assets/images/drive/04.png" alt="drive02">
          </span>
          <span class="iq-objects-03 iq-fadebounce">
            <span class="iq-round" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SectionStyle2',
  // eslint-disable-next-line vue/require-prop-types
  props: ['id', 'small']
}
</script>
