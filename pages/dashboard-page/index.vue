<template>
<div>
    <div class="part">
      <Dashboard/>
    </div>
</div>
</template>

<script>

// const $ = require('jquery')
import { sofbox } from '../../assets/app/app'
import Dashboard from '../../components/Dashboard/Dashboard'
import {  mapGetters, mapState } from 'vuex'


export default {
  middleware:"auth",
  layout:"Sidebar",

  components:{
    Dashboard
  },
  // computed: mapGetters({
  //   side_state: 'get',
  // }),
  mounted () {
    this.$store.commit('setSideBar', { text: 'dashboard' })
  },
}
</script>

<style>
.part{
  /* margin-left: 50px; */
}
</style>



