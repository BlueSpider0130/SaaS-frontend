<template>
    <div>
        <Signin/>
    </div>
</template>

<script>

import { sofbox } from '../../assets/app/app'
import Signin from '../../components/Signin/Signin'
// import "../../assets/css/color/style.css";
// import "../../assets/css/signin.css";


export default {
    layout:"Signin",
  components: {
    Signin
  },
  mounted () {
    setTimeout(function () {
      sofbox.index()
      // sofbox.magnific()
    }, 1000)
  }
}
</script>


