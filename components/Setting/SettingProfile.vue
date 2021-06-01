<template>
  <section id="setting_profile">
      <div class="profile-container">
          <div class="input-con">
              <label>First Name</label>
              <vs-input
                class="single-input"
                label-placeholder="First Name"
                v-model="user_data.u_name"
              />
          </div>
          <div class="input-con">
              <label>Last Name</label>
              <vs-input
                class="single-input"
                label-placeholder="Lase Name"
                v-model="user_data.u_name"
              />
          </div>
          <div class="input-con">
              <label>Email</label>
              <vs-input
                class="single-input"
                label-placeholder="Email"
                v-model="user_data.u_email"
              />
          </div>
          <div class="pwd-change-container">
                <label>Password</label>
                <div class="pwd-input">
                    <vs-input
                        label-placeholder="New Password"
                        v-model="user_data.u_email"
                    />
                    <vs-input
                        label-placeholder="Password Confirm"
                        v-model="user_data.u_email"
                    />
                    
                    <vs-button square color="success" class="upgrad-btn">
                        Change
                    </vs-button>
                </div>
          </div>
          <div class="update-btn">
                <vs-button square color="dribbble" class="upgrad-btn" size="large">
                    Change
                </vs-button>
          </div>
      </div>
  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'


// import "../../assets/css/setting.css";


export default {
  name: 'SettingProfile',
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
.profile-container{
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.input-con{
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}
.input-con>label{
    font-weight: bold;
}
.pwd-change-container{
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.pwd-input{
    display: flex;
    flex-direction: row;
}
.update-btn{
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
</style>