<template>
  <section id="setting_account">
      <div class="account-container">
        <div class="id-form">
          Account 
        </div>
        <div class="select-form">

          <!-- <div>
            <label>Name</label>
            <vs-input v-model="user_data.u_name"/>
          </div> -->
          <div>
            <label>Email</label>
            <vs-input v-model="user_data.u_email"/>
          </div>
          <!-- <div>
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
          </div> -->

        </div>
        <div class="pwd-update">
          <div class="pwd-one">
            <label>Current Password:</label>
            <vs-input v-model="user_data.u_current_pass"></vs-input>
          </div>
          <div class="pwd-one">
            <label>New Password:</label>
            <vs-input v-model="user_data.u_new_pass"></vs-input>
          </div>
        </div>
        <div class="member-btn-con">
          <vs-button square color="dribbble" @click="update(user_data)">
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
            <label>Password:</label>
            <span>{{user_data.u_new_pass}}</span>
          </div>
          <div class="d-flex justify-content-center">
            <vs-button @click="change(user_data)">OK</vs-button>
          </div>
          <!-- <div class="d-flex justify-content-between">
            <label>Plan:</label>
            <span>{{user_data.u_current_plan}}</span>
          </div> -->
        </div>
      </vs-dialog>
  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'
import { changeInfo } from "../../utils/API";
// import "../../assets/css/setting.css";


export default {
  name: 'SettingAccount',
  components:{
  },
  data () {
    return {
      logo: logoImg,
      mailformat: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      user_data:{
          u_id:"",
          u_name:"",
          u_email:"",
          u_current_pass:"",
          u_new_pass:"",
      },
      product_percent:30,
      sub_percent:12,
      sto_percent:68,
      max:100,
      update_confirm:false,
    }
  },
  mounted() {
    this.user_data.u_id = this.$store.getters.getUserId
    this.user_data.u_name = this.$store.getters.getUserName
    this.user_data.u_email = this.$store.getters.getUserEmail

    // console.log(this.user_data)
  },
  methods:{
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: 'Please check your email address or password. Password must have numbers over 6. 👉 ProtectPass 1.x'
      })
    },
    openChangeSuccess(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: 'Changed successfully! 👉 ProtectPass 1.x'
      })
    },
    openChangeWrong(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: 'Current password is wrong! 👉 ProtectPass 1.x'
      })
    },
    update(user_data){
      if (this.mailformat.test(this.user_data.u_email) && this.user_data.u_current_pass != "" && this.user_data.u_new_pass != "" && this.user_data.u_new_pass.length>5 ) {
        // changeInfo(user_data)
        this.update_confirm=true;
      }else {
        this.openNotification('top-left', 'danger')
      }
    },
    async change(user_data){
        // console.log(user_data)
      const change = await changeInfo(user_data)
      if (change == "success") {
        localStorage.removeItem('user_email')
        this.$store.commit('changeUserInfo', { text: user_data })
        this.openChangeSuccess('top-right', 'success')
        // this.$router.push('/landing-page-1')
        this.$router.push('/signin-page')
      }else if (change == "wrong_pwd") {
        this.openChangeWrong('top-right', 'danger')
      }
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