<template>
<div>
    <div class="part">
      <Products/>
    </div>
</div>
</template>

<script>

import { sofbox } from '../../assets/app/app'
import Products from '../../components/Products/Products'


export default {
  layout:"Sidebar",
  components:{
    Products
  },
  mounted () {
    this.$store.commit('setSideBar', { text: 'products' })
  }
}
</script>

<style>
.part{
}
</style>



