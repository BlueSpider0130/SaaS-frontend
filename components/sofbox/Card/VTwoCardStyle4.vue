<template>
  <div :class="classname">
    <div v-for="(item,index) in items" :key="index" :class="item.class">
      <div class="iq-portfolio">
        <a class="portfolio-img" href="#">
          <img :src="item.src" class="img-fluid" alt="img">
          <div class="portfolio-link">
            <div class="icon">
              <i class="fa fa-link" aria-hidden="true" />
            </div>
          </div>
        </a>
        <div class="iq-portfolio-content  text-left">
          <div class="details-box clearfix">
            <div class="consult-details">
              <a href="#">
                <h5 class="text-hover">{{ item.title }}</h5>
              </a>
              <p class="mb-0">
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VTwoCardStyle4',
  // eslint-disable-next-line vue/require-prop-types
  props: ['classname', 'items']
}
</script>
