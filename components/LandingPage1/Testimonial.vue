<template>
  <section class="overview-block-ptb white-bg iq-loved-customers">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">
              Loved By Our Customers
            </h3>
            <p>Here are the sayings of our customers</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div
            class="owl-carousel"
            data-autoplay="true"
            data-loop="true"
            data-nav="true"
            data-dots="false"
            data-items="3"
            data-items-laptop="3"
            data-items-tab="2"
            data-items-mobile="1"
            data-items-mobile-sm="1"
            data-margin="30"
          >
            <div class="item">
              <CardStyle7>
                <div slot="cardMedia">
                  <img v-rjs="3" alt="#" class="img-fluid rounded-circle" :src="require('../../assets/images/testimonial/client-1.png')">
                </div>
                <div slot="cardHeader">
                  <h5 class="iq-tw-6">
                    Jason Adams
                  </h5>
                  <span class="sub-title">CEO, Sofbox</span>
                </div>
                <div slot="cardBody">
                  <p>Excellent customer service and best savings on our energy bills to date. Glad I came across this website.</p>
                </div>
              </CardStyle7>
            </div>
            <div class="item">
              <CardStyle7>
                <div slot="cardMedia">
                  <img v-rjs="3" alt="client-2.jpg" class="img-fluid rounded-circle" :src="require('../../assets/images/testimonial/client-2.jpg')">
                </div>
                <div slot="cardHeader">
                  <h5 class="iq-tw-6">
                    Jenny Adams
                  </h5>
                  <span class="sub-title">CEO, Sofbox</span>
                </div>
                <div slot="cardBody">
                  <p>Curtis ci8 has been very helpful and I'm happy with the service he has given me today. Thank you .</p>
                </div>
              </CardStyle7>
            </div>
            <div class="item">
              <CardStyle7>
                <div slot="cardMedia">
                  <img v-rjs="3" alt="#" class="img-fluid rounded-circle" :src="require('../../assets/images/testimonial/client-3.jpg')">
                </div>
                <div slot="cardHeader">
                  <h5 class="iq-tw-6">
                    John Deo
                  </h5>
                  <span class="sub-title">CEO, Sofbox</span>
                </div>
                <div slot="cardBody">
                  <p>Great experience with Fivestars, really easy to use. A lot of good rewards in my favorite restaurants.</p>
                </div>
              </CardStyle7>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Testimonial'
}
</script>
