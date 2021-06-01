<template>
  <section id="signup" class="mx-auto">
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
                <h3 class="iq-tw-3">Sign in for ProtectPass</h3>
            </div>

            <form method="post" autocomplete="off">
                <div class="sign-form">
                    <h6 class="iq-tw-3">Email address</h6>
                    <div>
                        <input class="sign-input" type="email" id="user_session_email" v-model="user_data.u_email">
                    </div>
                </div>
                <div class="sign-form">
                    <h6 class="iq-tw-3">User name</h6>
                    <div>
                        <input class="sign-input" type="text" id="user_session_name" v-model="user_data.u_name">
                    </div>
                </div>
                <div class="sign-form">
                    <h6 class="iq-tw-3">Password</h6>
                    <div>
                        <input class="sign-input" required="required" type="password" id="user_session_password" v-model="user_data.u_pass">
                    </div>
                </div>
                <div class="sign-form">
                    <h6 class="iq-tw-3">Confirm password</h6>
                    <div>
                        <input class="sign-input" required="required" type="password" id="user_session_confirm" v-model="user_data.u_confirmpass">
                    </div>
                </div>
                <div class="sign-form">
                  
                    <button class="sign-btn button bt-black" @click="onSubmit($event)">Sign up</button>
                  
                </div>
            </form>
        </div>
      </div>
    </div>
    <div v-if="loading==false" class="heading-title mt-3">
        <h6>By clicking Sign up, you agree to our 
        <nuxt-link to="">Terms of Service</nuxt-link> & <nuxt-link to="">Privacy Policy</nuxt-link></h6>
    </div>
  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'
import "../../assets/css/color/style.css"
import "../../assets/css/signup.css";
import { register } from '../../utils/API';
import { mapGetters } from 'vuex'

export default {
  name: 'Signup',
  data () {
    return {
      mailformat: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      logo: logoImg,
      user_data:{
          u_email:"",
          u_name:"",
          u_pass:"",
          u_confirmpass:""
      },
      loading: false,
      // register_status:"",
      
    }
  },
  methods:{
      valid(){
        // if(this.u_email.length > 0) alert("Hello")
        //   console.log("asdfasadsfdfa")
      },
      closeLoading() {
        this.loading.close();
      },
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
          text: 'Already user signed up here!. Please log in. 👉 ProtectPass 1.x'
        })
      },
      async onSubmit($event){

        $event.preventDefault();
        if( this.mailformat.test(this.user_data.u_email) && this.user_data.u_pass==this.user_data.u_confirmpass && this.user_data.u_pass!="" && this.user_data.u_name!="" && this.user_data.u_pass.length>5 ){
          this.loading=true;
          const register_status = await register(this.user_data)
          if (register_status == "already") {
            this.openAlready('top-right', 'danger')
          }else if(register_status[0] == "success") {
            localStorage.setItem("user_email", this.user_data.u_email)
            localStorage.setItem("user_name", this.user_data.u_name)
            localStorage.setItem("user_id", register_status[1])

            this.$router.push('/dashboard-page')
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
