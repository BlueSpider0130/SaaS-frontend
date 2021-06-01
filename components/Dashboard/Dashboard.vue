<template>
  <section id="dashboard">
      <div class="container-dashboard">

        <div class="card-preview">
          <div class="card-row">
            <div class="card-one" id="current_pdf">
              <div class="card-txt">
                <div class="number">{{current_pdf}}</div>
                <div class="card-title">Protected PDF's</div>
              </div>
              <div class="icon">
                <i class="fas fa-lock" style="color: red"></i>
              </div>
            </div>
            <div class="card-one" id="remaining_pdf">
              <div class="card-txt">
                <div class="number">{{remaining_pdf}}</div>
                <div class="card-title">Remaining Protected PDF's</div>
              </div>
              <div class="icon">
                <i class="fas fa-user-check"></i>
              </div>
            </div>
            <div class="card-one" id="active_download">
              <div class="card-txt">
                <div class="number">{{active_download}}</div>
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
                <div class="number">{{remaining_download}}</div>
                <div class="card-title">Remaining Download Pages</div>
              </div>
              <div class="icon">
                <i class="fas fa-cloud-download-alt"></i>
              </div>
            </div>
            <div class="card-one" id="total_download">
              <div class="card-txt">
                <div class="number">{{total_download}}</div>
                <div class="card-title">Total PDF Downloads</div>
              </div>
              <div class="icon">
                <i class="fas fa-cart-arrow-down"></i>
              </div>
            </div>
            <div class="card-one" id="recent_download">
              <div class="card-txt">
                <div class="number">{{recent_download}}</div>
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
                  <vs-th sort @click="users = $vs.sortData($event ,users, 'name')">
                    Name
                  </vs-th>
                  <vs-th sort @click="users = $vs.sortData($event ,users, 'email')">
                    Email
                  </vs-th>
                  <vs-th sort @click="users = $vs.sortData($event ,users, 'id')">
                    Id
                  </vs-th>
                  <vs-th @click="users = $vs.sortData($event ,users, 'action_token')">
                    More
                  </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)"
                  :data="tr"
                >
                  <vs-td>
                    {{ tr.name }}
                  </vs-td>
                  <vs-td>
                  {{ tr.email }}
                  </vs-td>
                  <vs-td>
                  {{ tr.id }}
                  </vs-td>
                  <vs-td>
                    <vs-button border>
                      <i class="fas fa-eye"></i>
                    </vs-button>
                  </vs-td>

                  <template #expand>
                    <div class="con-content">
                      <div>
                      </div>
                      <div class="d-flex">
                        <vs-button border icon @click=" profile(tr.name, tr.email, tr.id)">
                          <i class="fas fa-eye"></i>
                          Client Profile
                        </vs-button>
                        <vs-button border danger>
                          <i class="fas fa-user-alt-slash"></i>
                          Disable Account
                        </vs-button>
                        <vs-button border @click="resetPWD(tr.name, tr.email, tr.id)">
                          <i class="fas fa-key"></i>
                          Reset Password
                        </vs-button>
                      </div>
                    </div>
                  </template>
                </vs-tr>
              </template>
              <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(users, search), max)" />
              </template>
            </vs-table>
          </div>
        </div>
        
        <vs-dialog id="client_profile" blur v-model="client_profile_active">
          <template #header>
            <h4 class="not-margin">
              Profile of <b>{{client_profile_data.c_fullname}}</b>
            </h4>
          </template>
          <div class="con-form p-3">
            <div class="d-flex justify-content-between ">
              <label>Full Name:</label>
              <span>{{client_profile_data.c_fullname}}</span>
            </div>
            <div class="d-flex justify-content-between ">
              <label>Email:</label>
              <span>{{client_profile_data.c_email}}</span>
            </div>
            <div class="d-flex justify-content-between ">
              <label>Date Signed Up:</label>
              <span>{{client_profile_data.c_signedup_date}}</span>
            </div>
            <div class="d-flex justify-content-between ">
              <label>Products Have Access To:</label>
              <span>{{client_profile_data.c_products_accessed}}</span>
            </div>
            <div class="d-flex justify-content-between ">
              <label>Disable/Enable Account:</label>
              <vs-switch v-model="client_profile_data.c_available">
                <template #off>
                    Disable
                </template>
                <template #on>
                    Enable
                </template>
              </vs-switch>
            </div>
          </div>
        </vs-dialog>

        <vs-dialog blur v-model="client_reset_active" id="reset_pwd">
          <template #header>
            <h4 class="not-margin pt-3">
              Reset password of <b>{{client_reset_pwd.c_fullname}}</b>
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
              <vs-button block>
                Change
              </vs-button>
            </div>
          </template>
        </vs-dialog>

      </div>
  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'
import protectPDF from '../../assets/images/ProtectPass/protectedPDF.png'


import "../../assets/css/dashboard.css";

export default {
  name: 'Dashboard',
  data () {
    return {
      logo: logoImg,
      protectPDF: protectPDF,
      author_data:{
          u_email:"",
          u_pass:"",
      },
      current_pdf:"250",
      remaining_pdf:"50",
      active_download:"200",
      remaining_download:"2500",
      total_download:"6500",
      recent_download:"450",

      //val for table pagination
      search: '',//for sesarch
      page: 1,
      max: 5,
      //client profile modal val
      client_profile_active:false,//modal enable val
      client_profile_data:{
            c_fullname:"",
            c_email:"",
            c_signedup_date:"04/05/2021",
            c_products_accessed:"2015",
            c_available:true,
      },
      //client profile reset pwd
      client_reset_active:false,
      client_reset_pwd:{
            c_fullname:"",
            c_email:"",
            c_current:"",
            c_reset:"",
            c_confirm:"",
      },

      //val of user
      users: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "website": "hildegard.org",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "website": "anastasia.net",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "website": "ramiro.info",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "website": "kale.biz",
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "website": "demarco.info",
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "website": "ola.org",
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "website": "elvis.io",
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "website": "jacynthe.com",
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "website": "conrad.com",
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "website": "ambrose.net",
        }
      ]


    }
  },
  methods:{
      //when click "eye" button(see client profile) setting data:name and email of specific tr
      profile( name, email, id ){
        this.client_profile_data.c_fullname = name;
        this.client_profile_data.c_email = email;
        this.client_profile_active=!this.client_profile_active;
      },
      //when click "reset" button(reset password) setting data:name and email of specific tr
      resetPWD( name, email, id){
        this.client_reset_pwd.c_fullname = name;
        this.client_reset_pwd.c_email = email;
        this.client_reset_active=!this.client_reset_active;
      },
      onSubmit($event){

      }
  }
}
</script>