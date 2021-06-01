<template>
  <div class="iq-team2 text-center">
    <div class="team-content">
      <slot name="cardMedia" />
    </div>
    <div class="avtar-name iq-mt-20 iq-font-white text-center">
      <slot name="cardTitle" />
    </div>
    <div class="team-social iq-mt-10">
      <slot name="cardFooter" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyle3'
}
</script>
