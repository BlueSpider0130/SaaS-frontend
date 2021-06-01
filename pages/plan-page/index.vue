<template>
    <div>
        <Plan/>
    </div>
</template>

<script>

import { sofbox } from '../../assets/app/app';
import Plan from '../../components/Plan/Plan';
// import "../../assets/css/color/style.css";
// import "../../assets/css/plan.css";


export default {
    layout:"Plan",
  components: {
    Plan
  },
  mounted () {
    setTimeout(function () {
      sofbox.index()
      // sofbox.magnific()
    }, 1000)
  }
}
</script>


