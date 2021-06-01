<template>
    <div>
        <Signup/>
    </div>
</template>

<script>

import { sofbox } from '../../assets/app/app'
import Signup from '../../components/Signup/Signup'
// import "../../assets/css/signup.css";

export default {
    layout:"Signup",
    components: {
        Signup
    },
    mounted () {
        setTimeout(function () {
        sofbox.index()
        // sofbox.magnific()
        }, 1000)
    }
}
</script>

