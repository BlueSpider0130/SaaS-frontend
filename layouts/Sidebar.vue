<template>
  <div class="all">
    <Sidebar />
    <div class="right-side">
      <DashboardHeader/>
      <nuxt />
    </div>
  </div>
</template>

<script>


import Sidebar from '../components/Sidebar/Sidebar'
import DashboardHeader from '../components/DashboardHeader/DashboardHeader'
export default {
  components:{
    Sidebar,
    DashboardHeader
  },
  data(){
    return{
      default_active:"reports",
    }
  },
}
</script>
<style scoped>
.all{
}
.right-side{
  padding-left: 50px;
  padding-top: 30px;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: overlay;
  background-color: #F5F7FD;
}

</style>
