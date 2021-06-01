<template>
  <section id="plan" class="overview-block-ptb grey-bg iq-price-table">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">Try ProtectPass free</h3>
            <p>No credit card required. Choose a plan that fits your business.</p>
          </div>
          <div class="free-btn">
            <nuxt-link to="/signup-page">
              <button class="button mx-auto" style="color:#fff">Free trial</button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <div class="text-center">
            <PricingCardStyle2>
              <div slot="cardHeader">
                <h2 class="iq-font-white iq-tw-7"><small>$</small>19<small>/Month</small></h2>
                <span class="text-uppercase iq-tw-4 iq-font-white">BASIC</span>
              </div>
              <ul slot="cardList">
                <li><s>100 MB Disk Space</s></li>
                <li>2 Subdomains</li>
                <li>5 Email Accounts</li>
                <li><s>Webmail Support</s></li>
                <li><s>Customer Support 24/7</s></li>
              </ul>
              <div slot="cardFooter">
                <a class="button" href="/payment-page">Purchase</a>
              </div>
            </PricingCardStyle2>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 r4-mt-30">
          <PricingCardStyle2>
            <div slot="cardHeader">
              <h2 class="iq-font-white iq-tw-7"><small>$</small>29<small>/Month</small></h2>
              <span class="text-uppercase iq-tw-4 iq-font-white">STANDARD</span>
            </div>
            <ul slot="cardList">
              <li>100 MB Disk Space</li>
              <li>2 Subdomains</li>
              <li>5 Email Accounts</li>
              <li><s>Webmail Support</s></li>
              <li>Customer Support 24/7</li>
            </ul>
            <div slot="cardFooter">
              <a class="button" href="/payment-page">Purchase</a>
            </div>
          </PricingCardStyle2>
        </div>
        <div class="col-md-4 col-lg-4 r4-mt-30">
          <PricingCardStyle2>
            <div slot="cardHeader">
              <h2 class="iq-font-white iq-tw-7"><small>$</small>49<small>/Month</small></h2>
              <span class="text-uppercase iq-tw-4 iq-font-white">ADVANCE</span>
            </div>
            <ul slot="cardList">
              <li>100 MB Disk Space</li>
              <li>2 Subdomains</li>
              <li>5 Email Accounts</li>
              <li><s>Webmail Support</s></li>
              <li>Customer Support 24/7</li>
            </ul>
            <div slot="cardFooter">
              <a class="button" href="/payment-page">Purchase</a>
            </div>
          </PricingCardStyle2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import "../../assets/css/color/style.css"
import "../../assets/css/plan.css";

export default {
  name: 'Plan'
}
</script>
