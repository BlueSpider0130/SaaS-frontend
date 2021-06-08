<template>
  <section id="setting">
    <div class="container-setting">

        <div class="heading">Account & Setting</div>
        <div class="tab-container">
          <b-tabs content-class="mt-3" align="center" background="primary">
            <b-tab title="Account"><SettingAccount/></b-tab>
            <b-tab title="Billing"><SettingBilling/></b-tab>
            <!-- <b-tab title="Users"><SettingUsers/></b-tab> -->
          </b-tabs>
        </div>

    </div>

  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'
import SettingAccount from '../Setting/SettingAccount'
import SettingBilling from '../Setting/SettingBilling'
import SettingUsers from '../Setting/SettingUsers'


import "../../assets/css/setting.css";


export default {
  name: 'Setting',
  components:{
    SettingAccount,
    SettingBilling,
    SettingUsers
  },
  data () {
    return {
      logo: logoImg,
      user_data:{
          u_email:"",
          u_pass:"",
      },
    }
  },
  methods:{
  }
}
</script>
