<template>
  <div class="row mt-5">
    <div class="col-sm-12">
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" :href="previousUrl"><i class="fas fa-arrow-left" /></a>
          </li>
          <li v-for="(value,index) in pagination" :key="index" class="page-item" :Class="value.page === current ? 'active' : ''">
            <a class="page-link" :href="value.page_link">{{ value.page }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" :href="nextUrl"><i class="fas fa-arrow-right" /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlackPagination',
  props: {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line vue/require-default-prop
    pagination: Array,
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line vue/require-default-prop
    current: Number,
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line vue/require-default-prop
    nextUrl: String,
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line vue/require-default-prop
    previousUrl: String,
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line vue/require-default-prop
    firstUrl: String,
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line vue/require-default-prop
    lastUrl: String
  }

}
</script>
