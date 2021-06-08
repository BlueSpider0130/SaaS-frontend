<template>
  <section id="dashboard">
    <div class="container-dashboard">
      <div class="card-preview">
        <div class="card-row">
          <div class="card-one" id="current_pdf">
            <div class="card-txt">
              <div class="number">{{ current_pdf }}</div>
              <div class="card-title">Protected PDF's</div>
            </div>
            <div class="icon">
              <i class="fas fa-lock" style="color: red"></i>
            </div>
          </div>
          <div class="card-one" id="remaining_pdf">
            <div class="card-txt">
              <div class="number">{{ remaining_pdf }}</div>
              <div class="card-title">Remaining Protected PDF's</div>
            </div>
            <div class="icon">
              <i class="fas fa-user-check"></i>
            </div>
          </div>
          <div class="card-one" id="active_download">
            <div class="card-txt">
              <div class="number">{{ active_download }}</div>
              <div class="card-title">Active Download Pages</div>
            </div>
            <div class="icon">
              <i class="fas fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <div class="card-row">
          <div class="card-one" id="remaining_download">
            <div class="card-txt">
              <div class="number">{{ remaining_download }}</div>
              <div class="card-title">Remaining Download Pages</div>
            </div>
            <div class="icon">
              <i class="fas fa-cloud-download-alt"></i>
            </div>
          </div>
          <div class="card-one" id="total_download">
            <div class="card-txt">
              <div class="number">{{ total_download }}</div>
              <div class="card-title">Total PDF Downloads</div>
            </div>
            <div class="icon">
              <i class="fas fa-cart-arrow-down"></i>
            </div>
          </div>
          <div class="card-one" id="recent_download">
            <div class="card-txt">
              <div class="number">{{ recent_download }}</div>
              <div class="card-title">Recent Downloads</div>
            </div>
            <div class="icon">
              <i class="fas fa-clipboard-list"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="card-button">
        <vs-button color="#B19CD9" class="card-protect-btn">
          Protect Content
        </vs-button>
      </div>

      <div class="client-table">
        <div class="center">
          <vs-table>
            <template #thead>
              <vs-tr>
                <vs-th style="width:250px" sort @click="users = $vs.sortData($event, users, 'reader_name')">
                  Name
                </vs-th>
                <vs-th sort @click="users = $vs.sortData($event, users, 'reader_email')">
                  Email
                </vs-th>
                <vs-th> More </vs-th>
                <vs-th> More </vs-th>
                <vs-th> More </vs-th>
                <vs-th sort @click="users = $vs.sortData($event, users, 'reader_id')">
                  Id
                </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr :key="i" v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)" :data="tr">
                <vs-td>
                  {{ tr.reader_name }}
                </vs-td>
                <vs-td>
                  {{ tr.reader_email }}
                </vs-td>
                <vs-td>
                  <vs-button border icon @click="profile(tr.reader_name, tr.reader_email, i + 1, tr.reader_available, tr.date, tr.reader_id)">
                    <i class="fas fa-eye"></i>
                    Client Profile
                  </vs-button>
                </vs-td>
                <vs-td>
                  <vs-button border @click="resetPWD(tr.reader_name, tr.reader_email, i + 1)">
                    <i class="fas fa-key"></i>
                    Reset Password
                  </vs-button>
                </vs-td>
                <vs-td>
                  <div class="w-75">
                    <vs-switch v-model="tr.reader_available" @input="account(tr.reader_available, tr.reader_id)">
                      <template #off> Disable </template>
                      <template #on> Enable </template>
                    </vs-switch>
                  </div>
                </vs-td>
                <vs-td>
                  {{ i + 1 }}
                </vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination
                v-model="page"
                :length="$vs.getLength($vs.getSearch(users, search), max)"
              />
            </template>
          </vs-table>
        </div>
      </div>

      <vs-dialog id="client_profile" blur v-model="client_profile_active">
        <template #header>
          <h4 class="not-margin">
            Profile of <b>{{ client_profile_data.c_fullname }}</b>
          </h4>
        </template>
        <div class="con-form p-3">
          <div class="d-flex justify-content-between">
            <label>Full Name:</label>
            <span>{{ client_profile_data.c_fullname }}</span>
          </div>
          <div class="d-flex justify-content-between">
            <label>Email:</label>
            <span>{{ client_profile_data.c_email }}</span>
          </div>
          <div class="d-flex justify-content-between">
            <label>Date Signed Up:</label>
            <span>{{ client_profile_data.c_signedup_date }}</span>
          </div>
          <!-- <div class="d-flex justify-content-between">
            <label>Products Have Access To:</label>
            <span>{{ client_profile_data.c_products_accessed }}</span>
          </div> -->
          <div class="d-flex justify-content-between">
            <label>Disable/Enable Account:</label>
            <vs-switch v-model="client_profile_data.c_status" @input="account(client_profile_data.c_status, client_profile_data.c_id)">
              <template #off> Disable </template>
              <template #on> Enable </template>
            </vs-switch>
          </div>
        </div>
      </vs-dialog>

      <vs-dialog blur v-model="client_reset_active" id="reset_pwd">
        <template #header>
          <h4 class="not-margin pt-3">
            Reset password of <b>{{ client_reset_pwd.c_fullname }}</b>
          </h4>
        </template>
        <div class="con-form p-3">
          <div class="d-flex justify-content-between m-2">
            <label>Current Password:</label>
            <vs-input
              label-placeholder="current password"
              v-model="client_reset_pwd.c_current"
            />
          </div>
          <div class="d-flex justify-content-between m-2">
            <label>Reset Password:</label>
            <vs-input
              label-placeholder="reset password"
              v-model="client_reset_pwd.c_reset"
            />
          </div>
          <div class="d-flex justify-content-between m-2">
            <label>Confirm Password:</label>
            <vs-input
              label-placeholder="confirm password"
              v-model="client_reset_pwd.c_confirm"
            />
          </div>
        </div>
        <template #footer>
          <div class="footer-dialog">
            <vs-button block> Change </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
  </section>
</template>

<script>
import logoImg from "../../assets/images/logo-1.png";
import protectPDF from "../../assets/images/ProtectPass/protectedPDF.png";
import "../../assets/css/dashboard.css";
import { getReaders, setActiveAccount } from "../../utils/API";

export default {
  name: "Dashboard",
  data() {
    return {
      logo: logoImg,
      options: [],
      protectPDF: protectPDF,
      author_data: {
        u_email: "",
        u_pass: "",
      },
      current_pdf: "250",
      remaining_pdf: "50",
      active_download: "200",
      remaining_download: "2500",
      total_download: "6500",
      recent_download: "450",

      //val for table pagination
      search: "", //for sesarch
      page: 1,
      max: 5,
      //client profile modal val
      client_profile_active: false, //modal enable val
      client_profile_data: {
        id: "",
        c_fullname: "",
        c_email: "",
        c_signedup_date: "",
        c_products_accessed: "2015",
        c_status: "",
        c_id:""
      },
      //client profile reset pwd
      client_reset_active: false,
      client_reset_pwd: {
        c_fullname: "",
        c_email: "",
        c_current: "",
        c_reset: "",
        c_confirm: "",
      },

      //val of user
      users: [],
    };
  },
  methods: {
    //when click "eye" button(see client profile) setting data:name and email of specific tr
    profile(name, email, id, status, date, reader_id) {
      this.client_profile_data.id = id
      this.client_profile_data.c_fullname = name
      this.client_profile_data.c_email = email
      this.client_profile_data.c_status = status
      this.client_profile_data.c_signedup_date = date
      this.client_profile_data.c_id = reader_id
      this.client_profile_active = !this.client_profile_active
    },
    //when click "reset" button(reset password) setting data:name and email of specific tr
    resetPWD(name, email, id) {
      this.client_reset_pwd.c_fullname = name
      this.client_reset_pwd.c_email = email
      this.client_reset_active = !this.client_reset_active
    },
    account(status, reader_id){
      console.log(status)
      console.log(reader_id)
      let data = {
        status: status,
        reader_id: reader_id
      }

      setActiveAccount(data)
    },
  },
  async mounted() {
    var user_data = {
      user_name: "",
      user_email: "",
      user_id: "",
    }
    user_data.user_name = this.$store.getters.getUserName
    user_data.user_email = this.$store.getters.getUserEmail
    user_data.user_id = this.$store.getters.getUserId

    var get_reader_data = this.$store.getters.getReaderData
    if (get_reader_data.length == 0) {
      console.log("length is 0")
      let tbl_data = await getReaders(user_data)
      this.$store.commit('setReaderData', { text: tbl_data })
      let reader_data = this.$store.getters.getReaderData
      this.users = reader_data
      console.log(reader_data)
      this.users.map((u) => {
        u.reader_available = u.reader_available ? true : false
      });
    }else{
      let reader_data = this.$store.getters.getReaderData
      this.users = reader_data
      console.log(reader_data)
      this.users.map((u) => {
        u.reader_available = u.reader_available ? true : false
      });
    }

    
  },
  computed:{
    
  },
  watch: {
    client_profile_data: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler(v) {
        var temp = this.users;
        temp.map((user, index) => {
          if (user.reader_email == v.c_email) {
            user.reader_available = v.c_status;
            console.log(v, "The list of colours has changed!");
          }
        });
        this.users = temp;
        // this.$forceUpdate();
      },
    },
  },
}
</script>
