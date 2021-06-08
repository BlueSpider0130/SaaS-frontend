<template>
<div>
    <div class="part">
      <Setting/>
    </div>
</div>
</template>

<script>

import { sofbox } from '../../assets/app/app'
import Setting from '../../components/Setting/Setting'


export default {
  middleware:"auth",
  layout:"Sidebar",

  components:{
    Setting
  },
  mounted () {
    this.$store.commit('setSideBar', { text: 'settings' })
  },
}
</script>

<style>
.part{
  /* margin-left: 50px; */
}
</style>



