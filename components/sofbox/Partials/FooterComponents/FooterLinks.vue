<template>
  <div>
    <h5 :class="'iq-tw-7 iq-mb-10 iq-font-'+color">
      {{ title }}
    </h5>
    <div class="row">
      <div v-for="(section,index) in content" :key="index" class="col-lg-6 col-md-6 col-sm-6">
        <ul class="menu">
          <li v-for="(list,value) in section.section" :key="value">
            <a :href="list.href">{{ list.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLinks',
  // eslint-disable-next-line vue/require-prop-types
  props: ['color', 'title', 'content']
}
</script>
