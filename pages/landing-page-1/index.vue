<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
      <Specialities />
      <Counter />
      <Testimonial />
      <Pricing />
      <Team />
      <CompareService />
      <Faq />
      <Blog />
      <Client />
      <footer>
        <ParallaxStyle1 :bg-image="require('../../assets/images/bg/01.jpg')" ids="iq-home" class-names="iq-ptb-100 iq-newsletter iq-bg-over iq-over-blue-90 jarallax">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="heading-title white iq-mb-25">
                  <h3 class="title iq-tw-7">
                    Subscribe Our Newsletter
                  </h3>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <form class="form-inline">
                  <input type="text" name="email" value="..." autocomplete="username email" style="display: none;">
                  <div class="form-group">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input id="inputPassword2" type="email" class="form-control" placeholder="Enter your email" autocomplete="new-password">
                  </div>
                  <a class="button bt-black iq-ml-25" href="javascript:void(0)">subscribe</a>
                </form>
              </div>
            </div>
          </div>
        </ParallaxStyle1>
        <Contact />
        <FooterStyle3>
          <p slot="address">
            1234 North Avenue Luke Lane, South Bend, IN 360001
          </p>
          <p slot="phone">
            +0123 456 789
            <br>Mon-Fri 8:00am - 8:00pm
            <br>
          </p>
          <p slot="mail">
            support@sofbox.com
            <br>24 X 7 online support
            <br>
          </p>
          <ul slot="links">
            <li><a href="javascript:void(0)"><i class="fab fa-twitter" /></a></li>
            <li><a href="javascript:void(0)"><i class="fab fa-facebook" /></a></li>
            <li><a href="javascript:void(0)"><i class="fab fa-google" /></a></li>
            <li><a href="javascript:void(0)"><i class="fab fa-github" /></a></li>
          </ul>
        </FooterStyle3>
      </footer>
    </div>
    <ColorCustomizer />
    <ScrollTop />
  </div>
</template>

<script>
import Home from '../../components/LandingPage1/Home'
import About from '../../components/LandingPage1/About'
import Specialities from '../../components/LandingPage1/Specialities'
import Counter from '../../components/LandingPage1/Counter'
import Testimonial from '../../components/LandingPage1/Testimonial'
import Pricing from '../../components/LandingPage1/Pricing'
import Team from '../../components/LandingPage1/Team'
import CompareService from '../../components/LandingPage1/CompareService'
import Faq from '../../components/LandingPage1/Faq'
import Blog from '../../components/LandingPage1/Blog'
import Client from '../../components/LandingPage1/Client'
import Contact from '../../components/LandingPage1/Contact'
import { sofbox } from '../../assets/app/app'

export default {
  layout: 'LandingPage1',
  components: {
    Home,
    About,
    Specialities,
    Counter,
    Testimonial,
    Pricing,
    Team,
    CompareService,
    Faq,
    Blog,
    Client,
    Contact
  },
  mounted () {
    setTimeout(function () {
      sofbox.index()
      // sofbox.magnific()
    }, 1000)
  }
}
</script>
<style scoped src="../../assets/css/color/style.css">

</style>
