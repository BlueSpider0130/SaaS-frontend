<template>
  <section id="pricing" class="overview-block-ptb grey-bg iq-price-table">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">Affordable Price</h3>
            <p>Make custom website as per our custom website packages.</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <a class="button" href="/signup-page">Sign up for free</a>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <div class="iq-pricing text-center">
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
        <div class="col-md-4 col-lg-4 flipInY r4-mt-30 wow" data-wow-duration="1s" data-wow-delay="0.2s">
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
export default {
  name: 'Pricing'
}
</script>
