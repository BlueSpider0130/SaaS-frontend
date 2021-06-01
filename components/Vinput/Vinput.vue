<template>
  <section id="v_input">
      <div class="upload-form">
        <vs-input v-model="value" placeholder="Name" />
        <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Vinput',
  data () {
    return {
      value:"",
      file1:[]
    }
  },
  methods:{
  }
}
</script>