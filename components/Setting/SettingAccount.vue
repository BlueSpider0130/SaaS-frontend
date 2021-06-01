<template>
  <section id="setting_account">
      <div class="account-container">
        <div class="id-form">
          Account (Merchant ID:209624)
        </div>
        <div class="select-form">

          <div>
            <label>Name</label>
            <vs-input v-model="user_data.u_name"/>
          </div>
          <div>
            <label>Email</label>
            <vs-input v-model="user_data.u_email"/>
          </div>
          <div>
            <label>Current Plan</label>
            <vs-select
              v-model="user_data.u_current_plan"
            >
              <vs-option label="Standard Plan" value="Standard">
                Standard Plan
              </vs-option>
              <vs-option label="Premium Plan" value="Premium">
                Premium Plan
              </vs-option>
              <vs-option label="Subscription Plan" value="Subscription">
                Subscription Plan
              </vs-option>
            </vs-select>
          </div>

        </div>
        <div class="pwd-update">
          <div class="pwd-one">
            <label>New Password:</label>
            <vs-input></vs-input>
          </div>
          <div class="pwd-one">
            <label>Confirm Password:</label>
            <vs-input></vs-input>
          </div>
        </div>
        <div class="member-btn-con">
          <vs-button square color="dribbble" @click="update(user_data.u_name,user_data.u_email,user_data.u_current_plan)">
              Update
          </vs-button>
          
        </div>
        <div class="usage-con">
          <div class="usage-letter">Usage</div>
          <div class="percent-con">
            <div class="products-percent">
              <div class="percent-title">Products</div>
                <b-progress :max="max">
                  <b-progress-bar :value="product_percent" :label="`${((product_percent / max) * 100).toFixed(2)}%`"></b-progress-bar>
                </b-progress>
            </div>
            <div class="products-percent">
              <div class="percent-title">Subscriptions</div>
                <b-progress :max="max">
                  <b-progress-bar :value="sub_percent" :label="`${((sub_percent / max) * 100).toFixed(2)}%`"></b-progress-bar>
                </b-progress>
            </div>
            <div class="products-percent">
              <div class="percent-title">Storage</div>
                <b-progress :max="max">
                  <b-progress-bar :value="sto_percent" :label="`${((sto_percent / max) * 100).toFixed(2)}%`"></b-progress-bar>
                </b-progress>
            </div>
          </div>
        </div>
        <!-- <div class="close-con">
          Close your account to <nuxt-link to="">&nbsp;click here</nuxt-link>
        </div> -->
      </div>
      <vs-dialog id="confirm_alert" blur v-model="update_confirm">
        <template #header>
          <h4 class="not-margin pt-3">
            Do you want to change data like <b>this?</b>
          </h4>
        </template>
        <div class="con-form p-3">
          <div class="d-flex justify-content-between">
            <label>Full Name:</label>
            <span>{{user_data.u_name}}</span>
          </div>
          <div class="d-flex justify-content-between">
            <label>Email:</label>
            <span>{{user_data.u_email}}</span>
          </div>
          <div class="d-flex justify-content-between">
            <label>Plan:</label>
            <span>{{user_data.u_current_plan}}</span>
          </div>
        </div>
      </vs-dialog>
  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'


// import "../../assets/css/setting.css";


export default {
  name: 'SettingAccount',
  components:{
  },
  data () {
    return {
      logo: logoImg,
      user_data:{
          u_name:"Larry Holsky",
          u_email:"topwebdev.0612@gmail.com",
          u_pass:"",
          u_current_plan:"Standard"
      },
      product_percent:30,
      sub_percent:12,
      sto_percent:68,
      max:100,
      update_confirm:false,
    }
  },
  methods:{
    update(change_name, change_email, change_plan){
      this.update_confirm=true;
    }
  }
}
</script>
<style scoped>
.id-form{
  background-color: #59C7F1;
  color: white;
  font-size: 30px;
  font-weight: bold;
  border-radius: 5px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-form{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
}
.member-btn-con{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  box-shadow: 0px 10px 4px -3px #b7c6fd;
}
.usage-con{
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  box-shadow: 0px 10px 4px -3px #b7c6fd;
}
.usage-letter{
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 50px;
  background-color: #59C7F1;
  color: white;
  font-size: 30px;
  font-weight: bold;
  height: 70px;
}
.percent-con{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.products-percent{
  width: 30%;
}
.percent-title{
  font-size: 20px;
  font-weight: bold;
}
/* .close-con{
  width: 100%;
  margin-top: 20px;
  background-color: #ea4c89;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
} */
.pwd-update{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.pwd-one{
  display: flex;
  /* width: 50%; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>