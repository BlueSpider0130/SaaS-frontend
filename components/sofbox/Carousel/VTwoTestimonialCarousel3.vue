<template>
  <div
    class="owl-carousel our-testimonial style-three"
    data-autoplay="true"
    data-loop="true"
    data-nav="false"
    data-dots="true"
    data-items="1"
    data-items-laptop="1"
    data-items-tab="1"
    data-items-mobile="1"
    data-items-mobile-sm="1"
  >
    <div v-for="(list,index) in testimonialList" :key="index" class="item text-left  ">
      <div class="iq-testimonial">
        <div class="testimonial-info mb-4">
          <img :src="list.image" alt="#" class="img-fluid rounded-circle">
          <div class="testimonial-name">
            <h5>{{ list.name }}</h5>
            <span class="sub-title">{{ list.designation }}</span>
          </div>
        </div>
        <p>{{ list.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VTwoTestimonialCarousel3',
  // eslint-disable-next-line vue/require-prop-types
  props: ['testimonialList']
}
</script>
