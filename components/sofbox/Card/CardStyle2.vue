<template>
  <div class="iq-blog text-left iq-ptb-30 iq-pr-30 iq-pl-30" :class="active ? 'active' : ''">
    <div>
      <slot name="cardIcon" />
      <slot name="cardTitle" />
    </div>
    <div class="content-blog">
      <slot name="cardBody" />
      <slot name="cardFooter" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyle2',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    active: { default: false }
  }
}
</script>
