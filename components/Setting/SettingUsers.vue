<template>
    <section id="setting_users">
        <div class="users-container">
            <div class="users-title">Users</div>
            <vs-table class="admin-table">
                <template #thead>
                    <vs-tr>
                        <vs-th>
                        Name
                        </vs-th>
                        <vs-th>
                        Email
                        </vs-th>
                        <vs-th>
                        Type
                        </vs-th>
                    </vs-tr>
                    </template>
                    <template #tbody>
                    <vs-tr
                        :key="i"
                        v-for="(tr, i) in users"
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
                    </vs-tr>
                </template>
            </vs-table>
            <div class="add-user-btn">
                <vs-button  square color="dribbble" class="add-user">
                    Add User
                </vs-button>
            </div>
        </div>
    </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'


// import "../../assets/css/setting.css";


export default {
  name: 'SettingUsers',
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
      users: [
        {
            "id": "Administrator",
            "name": "Vadim Postnicov",
            "username": "Bret",
            "email": "topwebdev.0612@gmail.com",
            "website": "hildegard.org",
        }
      ]
    }
  },
  methods:{
  }
}
</script>
<style scoped>
    .users-container{
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .users-title{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 50px;
    }
    .add-user{
        width: 150px;
        font-size: 20px;
    }
</style>