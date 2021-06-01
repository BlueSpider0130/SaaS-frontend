<template>
  <section id="products">
    <div class="container-products">
      <div class="products-title">
        PRODUCTS
      </div>
      <div class="add-products">
        <div class="explain-product">Sell digital products, subscriptions, physical products and more.</div>
        <vs-button @click="singleAdd()" color="dribbble" class="add-product-btn">
          Add Product
        </vs-button>
        <hr style="width:100%; background-color:#59C7F1;">
        <div class="b-d-container">
          <div class="clickable" @click="bulkAdd()"><i class="fas fa-desktop"></i>&nbsp;Bulk Importer</div>
          <div class="clickable"><i class="fas fa-download"></i>&nbsp;Download</div>
        </div>
      </div>
      <div class="products-title-list">
        Your Products
      </div>
      <div class="s-s-contain">
        <div class="s-s-one">
          <vs-select v-model="select">
            <vs-option label="Newest" value="1">
              Newest 
            </vs-option>
            <vs-option label="Oldest" value="2">
              Oldest
            </vs-option>
            <vs-option label="Alphabetical" value="3">
              Alphabetical
            </vs-option>
          </vs-select>
        </div>
        <div class="s-s-one">
          <vs-input primary v-model="search" placeholder="Search" />
        </div>
      </div>
      <hr style="width:100%; background-color:#59C7F1;">
      <div class="product-list">
        <div class="center">
          <vs-table>
            <template #tbody>
              <vs-tr
                :key="i"
                v-for="(tr, i) in $vs.getPage(products, page, max)"
                :data="tr"
              >
                <vs-td class="sum-td">
                  <i class="fas fa-file-pdf" style="font-size:40px; color:#59C7F1"></i>
                  <div class="td-right">
                    <div style="color:#59C7F1; font-weight:bold;">{{tr.owner}}</div>
                    <div>{{tr.created_date}}</div>
                  </div>

                </vs-td>
                <vs-td>
                Created {{ tr.file_name }}
                </vs-td>
                <vs-td>
                {{ tr.id }}
                </vs-td>
              </vs-tr>
            </template>
            <template #footer>
              <vs-pagination v-model="page" :length="$vs.getLength(products, max)" />
            </template>
          </vs-table>
        </div>
      </div>
    </div>
    <vs-dialog blur v-model="single_add" id="single_add">  <!--This is dialog for single upload -->
      <div v-if="!single_file">
        <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true" @dragleave="dragging = false">
          <div class="dropZone-info" @drag="onChange">
            <span class="fa fa-cloud-upload dropZone-title"></span>
            <span class="dropZone-title">Drop file or click to upload</span>
            <div class="dropZone-upload-limit-info">
              <div>extension support: txt</div>
              <div>maximum file size: 5 MB</div>
            </div>
          </div>
          <input type="file" @change="onChange">
        </div>
      </div>
      <div v-else class="dropZone-uploaded">
        <div class="dropZone-uploaded-info">
          <span class="dropZone-title">Uploaded</span>
          <button type="button" class="btn btn-primary removeFile" @click="removeFile">Remove File</button>
        </div>
      </div>
      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="singleUpload($event)">
            Upload
          </vs-button>
        </div>
      </template>

    </vs-dialog>
    <vs-dialog blur v-model="bulk_add" id="bulk_add">  <!--  This is dialog for bulk upload -->
      <template #header>
        <h4 class="not-margin pt-3">
          Bulk <b>Import</b>
        </h4>
      </template>
      <div class="con-form p-3">
        <div class="d-flex flex-column justify-content-center m-2">
          <div style="text-align:center;">Bulk import products using the form below. This page also supports dragging and dropping files from your disktop.</div>
          </div>
          <div class="upload-container" id="upload_container">
            <Vinput v-for="(n,index) in number_repeat"/>
          </div>
          <div class="plus-btn">
            <div class="clickable" @click="addForm()"><i class="fas fa-plus"></i>&nbsp;Add New Product</div>
          </div>
      </div>
      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            Add
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur v-model="download_link_active" id="download_link_modal">  <!--  this is dialog for download link show! -->
      <template #header>
        <h4 class="not-margin pt-3">
          Download link <b>here!</b>
        </h4>
      </template>
      <div class="con-form p-3">
        <div class="d-flex flex-column justify-content-center m-2">
          <div class="w-full d-flex justify-content-center" style="background-color:#C4FFD4">
            http://192.168.110.94:5700/{{single_download_link.pdfId}}/{{single_download_link.pdfRandomName}}/{{single_download_link.uploaderUserId}}
          </div>
        </div>
      </div>
      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="copy()">
            Copy this link to clipboard.
          </vs-button>
        </div>
      </template>
    </vs-dialog>

  </section>
</template>

<script>
import logoImg from '../../assets/images/logo-1.png'
import Vinput from '../Vinput/Vinput'
import { singleUploader } from '../../utils/API';

import "../../assets/css/products.css";


export default {
  name: 'Products',
  components:{
    Vinput,
  },
  data () {
    return {
      logo: logoImg,
      user_data:{
        u_email:"",
        u_name:"",
        u_id:"",
      },
      select:"1",
      search:"",
      //table
      page: 1,
      max: 3,
      products: [
        {
          "id": 1,
          "owner": "Leanne Graham",
          "created_date": "Bret",
          "file_name": "delivery_E_Book.pdf",
          "website": "hildegard.org",
        },
        {
          "id": 2,
          "owner": "Ervin Howell",
          "created_date": "Antonette",
          "file_name": "delivery_E_Book.pdf",
          "website": "anastasia.net",
        },
        {
          "id": 3,
          "owner": "Clementine Bauch",
          "created_date": "Samantha",
          "file_name": "delivery_E_Book.pdf",
          "website": "ramiro.info",
        },
        {
          "id": 4,
          "owner": "Patricia Lebsack",
          "created_date": "Karianne",
          "file_name": "delivery_E_Book.pdf",
          "website": "kale.biz",
        },
        {
          "id": 5,
          "owner": "Chelsey Dietrich",
          "created_date": "Kamren",
          "file_name": "delivery_E_Book.pdf",
          "website": "demarco.info",
        },
        {
          "id": 6,
          "owner": "Mrs. Dennis Schulist",
          "created_date": "Leopoldo_Corkery",
          "file_name": "delivery_E_Book.pdf",
          "website": "ola.org",
        },
        {
          "id": 7,
          "owner": "Kurtis Weissnat",
          "created_date": "Elwyn.Skiles",
          "file_name": "delivery_E_Book.pdf",
          "website": "elvis.io",
        },
        {
          "id": 8,
          "owner": "Nicholas Runolfsdottir V",
          "created_date": "Maxime_Nienow",
          "file_name": "delivery_E_Book.pdf",
          "website": "jacynthe.com",
        },
        {
          "id": 9,
          "owner": "Glenna Reichert",
          "created_date": "Delphine",
          "file_name": "delivery_E_Book.pdf",
          "website": "conrad.com",
        },
        {
          "id": 10,
          "owner": "Clementina DuBuque",
          "created_date": "Moriah.Stanton",
          "file_name": "delivery_E_Book.pdf",
          "website": "ambrose.net",
        }
      ],
      //add single button active
      single_add:false,
      bulk_add:false,
      number_repeat:1,
      //single upload data
      single_file: '',
      dragging: false,
      //download link here
      download_link_active: false,
      single_download_link:{
        pdfId:"",
        pdfRandomName:"",
        uploaderUserName:"",
        uploaderUserId:"",
        uploaderUserEmail:""
      }
    }
  },
  methods:{
    singleAdd(){
      this.single_add = true;
    },
    bulkAdd(){
      this.bulk_add = true;
    },
    addForm(){
      this.number_repeat++;
    },
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        // title: 'Documentation Vuesax 4.0+',
        text: 'Uploading is success!. 👉 ProtectPass 1.x'
      })
    },
    //////////////////////
    
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      
      if (!files.length) {
        this.dragging = false;
        return;
      }
        
      this.createFile(files[0]);
    },
    createFile(single_file) {
      if (!single_file.type.match('pdf.*')) {
        alert('please select txt file');
        this.dragging = false;
        return;
      }
      
      if (single_file.size > 50000000) {
        alert('please check file size no over 50 MB.')
        this.dragging = false;
        return;
      }
      
      this.single_file = single_file;
      console.log(this.single_file);
      this.dragging = false;
    },
    removeFile() {
      this.single_file = '';
    },
    /////upload to server
    async singleUpload(e){
      const data = new FormData();
      data.append('pdf', this.single_file)
      data.append('user_email', localStorage.getItem("user_email"))
      data.append('user_name', localStorage.getItem("user_name"))
      data.append('user_id', localStorage.getItem("user_id"))
      // console.log(data)
      const single_upload_status = await singleUploader(data)
      if (single_upload_status[0] == "success") {
        this.openNotification('top-left', 'success')
        this.single_add = false
        // console.log(single_upload_status[1])
        this.single_download_link.pdfId = single_upload_status[1].pdf_id
        this.single_download_link.pdfRandomName = single_upload_status[1].pdf_random_name
        this.single_download_link.uploaderUserId = single_upload_status[1].upload_user_id
        console.log()
        this.download_link_active = true
        this.removeFile()
      }else alert("upload fault!")
    },
    copy(){
    },
    
  },

  computed: {

    extension() {
      return (this.single_file) ? this.single_file.name.split('.').pop() : '';
    },

  }

}
</script>

<style>
.dropZone {
  width: 80%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975A0;
}

.dropZone-info {
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5C5C5C;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 80%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}
</style>