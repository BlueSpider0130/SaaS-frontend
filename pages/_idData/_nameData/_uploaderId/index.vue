<template>
  <div>
    <!-- <a href='http://192.168.110.94:8000/download/asdfd.pdf'>down</a> -->
    <div class="container-download">
      <vs-button @click="downloadItem($event)">download</vs-button>

      <div class="center">
        <vs-dialog prevent-close not-close v-model="register_active">
          <template #header>
            <h4 class="not-margin">Register to <b>ProtectPass</b></h4>
          </template>

          <div class="con-form">
            <vs-input v-model="register_data.reader_email" placeholder="Email">
              <template #icon>
                <i class="fas fa-at"></i>
              </template>
            </vs-input>
            <vs-input v-model="register_data.reader_name" placeholder="Name">
              <template #icon>
                <i class="fas fa-user"></i>
              </template>
            </vs-input>
            <vs-input
              type="password"
              v-model="register_data.reader_pwd"
              placeholder="Password"
            >
              <template #icon>
                <i class="fas fa-lock"></i>
              </template>
            </vs-input>
            <vs-input
              type="password"
              v-model="register_data.confirm_pwd"
              placeholder="Confirm Password"
            >
              <template #icon>
                <i class="fas fa-check-double"></i>
              </template>
            </vs-input>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block @click="registerReader()">
                Register in
              </vs-button>

              <div class="new">
                Already have account?
                <a href="" @click="welcome($event)">Go to download</a>
              </div>
            </div>
          </template>
        </vs-dialog>

        <vs-dialog prevent-close not-close v-model="welcome_active">
          <template #header>
            <h4 class="not-margin">Enter to <b>Download</b></h4>
          </template>

          <div class="con-form">
            <vs-input v-model="login_data.reader_email" placeholder="Email">
              <template #icon>
                <i class="fas fa-at"></i>
              </template>
            </vs-input>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block @click="loginReader()"> Sign In </vs-button>

              <div class="new">
                New Here?
                <a href="" @click="create($event)">Create New Account</a>
              </div>
            </div>
          </template>
        </vs-dialog>

        <vs-dialog prevent-close not-close v-model="download_active">
          <template #header>
            <h4 class="not-margin">Click this button to <b>Download</b></h4>
          </template>
          <div class="con-form d-flex justify-content-center">
            <vs-button @click="downloadItem($event)">download</vs-button>
          </div>
        </vs-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// import { sofbox } from "../../../../assets/app/app";
import Axios from "axios";
import { singleDownload } from "../../../../utils/API";
import { registerReader } from "../../../../utils/API";
import { loginReader } from "../../../../utils/API";

export default {
  data() {
    return {
      download_active: false,
      mailformat:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      loading: false,
      file_data: {
        file_id: "",
        file_name: "",
        uploader_id: "",
        reader_email:""
      },
      register_data: {
        reader_email: "",
        reader_name: "",
        reader_pwd: "",
        confirm_pwd: "",
      },
      login_data: {
        reader_email: "",
      },
      register_active: false,
      welcome_active: true,
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.file_data.file_id = this.$route.params.idData;
    this.file_data.file_name = this.$route.params.nameData + ".pdf";
    this.file_data.uploader_id = this.$route.params.uploaderId;
  },
  methods: {
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: "Please check your email address or password. Password must have numbers over 6. 👉 ProtectPass 1.x",
      });
    },
    openAlready(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: "Already user signed up here!. Please log in. 👉 ProtectPass 1.x",
      });
    },
    openNomember(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: "No member!. Please register your account. 👉 ProtectPass 1.x",
      });
    },
    openSuccess(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: "This is download buton. Please click this button to download product. 👉 ProtectPass 1.x",
      });
    },
    async downloadItem($event) {
      $event.preventDefault();
      const reader_email = localStorage.getItem('reader_email')
      console.log(this.file_name);
      this.file_data.reader_email = reader_email
      const file_name = this.file_data;
      console.log(file_name);
      const test = await singleDownload(file_name);
    },
    create(e) {
      event.preventDefault();
      this.register_data.reader_email = "";
      this.register_data.reader_pwd = "";
      this.welcome_active = false;
      this.register_active = true;
    },
    welcome(e) {
      event.preventDefault();
      this.login_data.reader_email = "";
      this.register_active = false;
      this.welcome_active = true;
    },
    async registerReader() {
      if (
        this.mailformat.test(this.register_data.reader_email) &&
        this.register_data.reader_pwd != "" &&
        this.register_data.reader_name != "" &&
        this.register_data.reader_pwd == this.register_data.confirm_pwd &&
        this.register_data.reader_pwd.length > 5
      ) {
        console.log(
          this.register_data.reader_email,
          this.register_data.reader_pwd
        );
        console.log(this.file_data);
        const data = {
          reader_email: this.register_data.reader_email,
          reader_name: this.register_data.reader_name,
          reader_pwd: this.register_data.reader_pwd,
          pdf_id: this.file_data.file_id,
          pdf_name: this.file_data.file_name,
          uploader_id: this.file_data.uploader_id,
        };
        const register_status = await registerReader(data)
        const reader_email = this.register_data.reader_email
        console.log("this is status ", register_status)
        if (register_status == "success") {
          this.openSuccess("top-right", "success");
          localStorage.setItem("reader_email", reader_email)
          this.register_active = false;
          this.download_active = true;
        } else if (register_status == "already") {
          this.openAlready("top-right", "primary");
        }
      } else {
        this.openNotification("top-left", "danger");
      }
    },
    async loginReader(){
      if (this.mailformat.test(this.login_data.reader_email)) {
        const login_status = await loginReader(this.login_data)
        const reader_email = this.login_data.reader_email
        if (login_status == "success") {
          localStorage.setItem("reader_email", reader_email)
          this.welcome_active = false
          this.download_active = true
          this.openSuccess
        }else this.openNomember('top-left', 'danger')
      } else {
        this.openNotification('top-left', 'danger')
      }
    }

  },
};
</script>

<style>
.container-download {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../../assets/images/rocket.png");
  background-color: #95b6ab;
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}
.con-form .flex a:hover {
  opacity: 1;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}
.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
  width: 100%;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}
.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}
.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}
.footer-dialog .new a:hover {
  text-decoration: underline;
}
.footer-dialog .vs-button {
  margin: 0px;
}
</style>
