<template>
  <section id="dashboard_header">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                <vs-input primary label-placeholder="Search" v-model="search_value"/>
              </div>
              <div class="col-md-6 header-btn-profile">
                <vs-button :active="active == 2" @click="active = 2" square color="dribbble" class="upgrad-btn">
                  Upgrade
                </vs-button>
                <b-dropdown id="dropdown_profile" :text=user_data.u_name right class="m2">
                  <b-dropdown-item-button> <i class="fas fa-user"></i>&nbsp;Profile</b-dropdown-item-button>
                  <b-dropdown-item-button> <i class="fas fa-address-card"></i>&nbsp;Support</b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button @click="logout($event)"><i class="fas fa-sign-out-alt"></i>&nbsp;Log out</b-dropdown-item-button>
                </b-dropdown>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'

import "../../assets/css/dashboard_header.css";
import {  getters } from 'vuex'

export default {
  name: 'DashboardHeader',
  data () {
    return {
      logo: logoImg,
      user_data:{
          u_email:"",
          u_pass:"",
          u_name:""
      },
      search_value:"",
      active:""
    }
  },
  mounted(){
      this.$vs.setColor('primary', '#59C7F1');

      const user_name = localStorage.getItem("user_name")           //get user info data from localstorage
      this.$store.commit('setUserName', { text: user_name })        //set vuex data from localstorage using commit in mutation
      const u_name = this.$store.getters.getUserName                //get -------------------//------------------------------
      this.user_data.u_name = u_name;
      
  },
  methods:{
      logout(e){
        localStorage.removeItem("user_email")
        localStorage.removeItem("user_name")
        localStorage.removeItem("user_id")
        this.$router.push('/landing-page-1')
      }
  }
}
</script>
