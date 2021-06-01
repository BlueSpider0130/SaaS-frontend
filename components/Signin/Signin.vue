<template>
  <section id="signin" class="mx-auto">
    <div v-if="loading==true" class="text-center loading-sign">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div>
    <div v-if="loading==false" class="heading-title mt-3">
        <div class="mx-auto"><img class="sign-logo" :src="logo"></div>
        <!-- <h3 class="title iq-tw-7">ProtectPass</h3> -->
    </div>
    <div v-if="loading==false" class="container sign">
      <div class="row">
        <div class="col-sm-12">
            <div class="heading-title">
                <h3 class="iq-tw-3">Sign in to your account</h3>
            </div>

            <form method="post" autocomplete="off">
                <div class="sign-form">
                    <h6 class="iq-tw-3">Email address</h6>
                    <div>
                        <!-- <b-form-input class="sign-input require" name="user_session[email]" id="user_session_email" v-model="user_data.u_email"></b-form-input> -->
                        <input class="sign-input" type="email" id="user_session_email" v-model="user_data.u_email">      
                    </div>
                </div>
                <div class="sign-form">
                    <h6 class="iq-tw-3">Password</h6>
                    <div>
                        <!-- <b-form-input class="sign-input" required="required" type="password" name="user_session[password]" id="user_session_password" v-model="user_data.u_pass"></b-form-input> -->
                        <input class="sign-input" type="password" id="user_session_pwd" v-model="user_data.u_pass">
                    </div>
                </div>
                <div class="sign-form">
                    <button class="sign-btn button bt-black" @click="onSubmit($event)">Log in</button>
                </div>
            </form>
        </div>
      </div>
    </div>
    <div v-if="loading==false" class="heading-title mt-3">
        <h6>Do you have an account?
        <nuxt-link to="/plan-page">Sign up</nuxt-link></h6>
    </div>  
  </section>
</template>

<script> 
import logoImg from '../../assets/images/logo-1.png'
import "../../assets/css/color/style.css"
import "../../assets/css/signin.css"
import { login } from '../../utils/API'


export default {
  name: 'Signin',
  data () {
    return {
      mailformat: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      logo: logoImg,
      user_data:{
          u_email:"",
          u_pass:""
      },
      loading:false,
    }
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
      openAlready(position = null, color) {
        const noti = this.$vs.notification({
          color,
          position,
          // title: 'Documentation Vuesax 4.0+',
          text: 'Wrong Password! Please enter correct password. 👉 ProtectPass 1.x'
        })
      },
      openSuccess(position = null, color) {
        const noti = this.$vs.notification({
          color,
          position,
          // title: 'Documentation Vuesax 4.0+',
          text: 'Login success!. 👉 ProtectPass 1.x'
        })
      },
      openNomember(position = null, color) {
        const noti = this.$vs.notification({
          color,
          position,
          // title: 'Documentation Vuesax 4.0+',
          text: 'Your email address is not signed up. Please sign up now. 👉 ProtectPass 1.x'
        })
      },

      async onSubmit($event){
        $event.preventDefault();
        if( this.mailformat.test(this.user_data.u_email) && this.user_data.u_pass!="" && this.user_data.u_pass.length>5 )
        {
          this.loading=true;
          console.log("state")
          const login_status = await login(this.user_data);
          if (login_status[0] == "success") {
            this.openSuccess('top-right', 'success')
            localStorage.setItem("user_email", this.user_data.u_email)
            localStorage.setItem("user_name", login_status[1])
            localStorage.setItem("user_id", login_status[2])
            this.$router.push('/dashboard-page')
          }else if(login_status == "wrong_password"){
            this.openAlready('top-right', 'danger')
          }else if(login_status == "no_member"){
            this.openNomember('top-right', 'primary')
          }
          setTimeout(()=>{
            this.loading=false;
          }, 500);
        }else{
          this.openNotification('top-left', 'danger')
        }
      },
  }
}
</script>
<style scoped>
  .loading-sign{
    position: absolute;
    height: -webkit-fill-available;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
