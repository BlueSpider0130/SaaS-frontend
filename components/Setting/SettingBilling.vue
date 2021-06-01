<template>
    <section id="setting_billing">
        <div class="billing-container">
            <div class="billing-title">Billing Information</div>
            <div class="billing-explain">To <b class="iq-tw-7">View</b> or <b class="iq-tw-7">Update</b> your billing information, please click the button below</div>
            <vs-button  square color="dribbble" class="update-btn" href="https://sales.protectpass.io/updateinfo/">
                Click here
            </vs-button>
        </div>
    </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'


// import "../../assets/css/setting.css";


export default {
  name: 'SettingBilling',
  components:{
  },
  data () {
    return {
      logo: logoImg,
      user_data:{
          u_name:"",
          u_email:"",
          u_pass:"",
      },
    }
  },
  methods:{
  }
}
</script>
<style scoped>
    .billing-container{
        width: 100%;
        margin-top: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .billing-title{
        font-size: 40px;
        font-weight: bold;

    }
    .billing-explain{
        font-size: 30px;
    }
    .update-btn{
        margin-top: 30px;
        width: 150px;
        border-radius: 5px;
        height: 100%
    }
</style>