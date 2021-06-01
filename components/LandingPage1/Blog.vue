<template>
  <section id="blog" class="overview-block-ptb grey-bg iq-blog blog-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="heading-title">
            <h3 class="title iq-tw-7">
              Latest Blog Post
            </h3>
            <p>Below are some of the most popular blogging solutions.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div
            class="owl-carousel"
            data-autoplay="true"
            data-loop="true"
            data-nav="false"
            data-dots="true"
            data-items="3"
            data-items-laptop="3"
            data-items-tab="2"
            data-items-mobile="2"
            data-items-mobile-sm="1"
            data-margin="30" >
            <!--<div class="item">
              <CardStyle1>
                <div slot="cardMedia">
                  <div class="media-wrapper">
                    <video id="player1" style="width:100%;height:100%;" :poster="require('../../assets/video/01.jpg')" controls preload="none">
                      <source type="video/m4v" :src="require('../../assets/video/01.m4v')">
                      <source type="video/webm" :src="require('../../assets/video/01.webm')">
                      <source type="video/ogg" :src="require('../../assets/video/01.ogv')">
                    </video>
                  </div>
                </div>
                <div slot="cardTitle">
                  <a href="javascript:void(0)">
                    <h5 class="iq-tw-7 iq-mb-10">Blogpost With HTML Video</h5>
                  </a>
                </div>
                <div slot="cardBody">
                  <p>Share your ideas all over the world. Write blogs for any topic and post it on the website.</p>
                </div>
                <div slot="cardFooter">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-comment" aria-hidden="true" /> 5</a>
                    </li>
                  </ul>
                </div>
              </CardStyle1>
            </div>-->
            <div class="item">
              <CardStyle1>
                <div slot="cardMedia">
                  <img class="img-fluid center-block" :src="require('../../assets/images/blog/blog-4.jpg')" alt="#">
                </div>
                <div slot="cardTitle">
                  <a href="javascript:void(0)">
                    <h5 class="iq-tw-7 iq-mb-10"> Vue JS easy to learn</h5>
                  </a>
                </div>
                <div slot="cardBody">
                  <p>It's easier to learn than AngularJS or React. Part of the ease comes from that you can add Vue to any single webpage file.</p>
                </div>
                <div slot="cardFooter">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-comment" aria-hidden="true" /> 5</a>
                    </li>
                  </ul>
                </div>
              </CardStyle1>
            </div>
            <div class="item">
              <CardStyle1>
                <div slot="cardMedia">
                  <div class="iq-bolg-video">
                    <img class="img-fluid center-block" :src="require('../../assets/images/blog/01.jpg')" alt="#">
                  </div>
                </div>
                <div slot="cardTitle">
                  <a href="javascript:void(0)">
                    <h5 class="iq-tw-7 iq-mb-10">Sharing Data With All Views</h5>
                  </a>
                </div>
                <div slot="cardBody">
                  <p>you may need to share a piece of data with all views that are rendered by your application. You may do so using the view facade's share method.</p>
                </div>
                <div slot="cardFooter">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-comment" aria-hidden="true" /> 5</a>
                    </li>
                  </ul>
                </div>
              </CardStyle1>
            </div>
            <div class="item">
              <CardStyle1>
                <div slot="cardMedia">
                  <div class="iq-bolg-video">
                    <img class="img-fluid center-block" :src="require('../../assets/images/blog/02.jpg')" alt="#">
                  </div>
                </div>
                <div slot="cardTitle">
                  <a href="javascript:void(0)">
                    <h5 class="iq-tw-7 iq-mb-10">Passing Data in VUE</h5>
                  </a>
                </div>
                <div slot="cardBody">
                  <p>You can send data from a child to a parent component by means of Vue's built-in $emit() method.</p>
                </div>
                <div slot="cardFooter">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-comment" aria-hidden="true" /> 5</a>
                    </li>
                  </ul>
                </div>
              </CardStyle1>
            </div>
            <div class="item">
              <CardStyle1>
                <div slot="cardMedia">
                  <img class="img-fluid center-block" :src="require('../../assets/images/blog/03.jpg')" alt="#">
                  <div id="player2-container" class="players">
                    <div class="media-wrapper">
                      <audio id="player2" preload="none" controls>
                        <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" type="audio/mp3">
                      </audio>
                    </div>
                  </div>
                </div>
                <div slot="cardTitle">
                  <a href="javascript:void(0)">
                    <h5 class="iq-tw-7 iq-mb-10">Learn react or VUE ?</h5>
                  </a>
                </div>
                <div slot="cardBody">
                  <p>Vue is easier to learn than React because it leverages more traditional web technologies better than React. </p>
                </div>
                <div slot="cardFooter">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-comment" aria-hidden="true" /> 5</a>
                    </li>
                  </ul>
                </div>
              </CardStyle1>
            </div>
            <div class="item">
              <CardStyle1>
                <div slot="cardMedia">
                  <img class="img-fluid center-block" :src="require('../../assets/images/blog/blog-5.jpg')" alt="#">
                </div>
                <div slot="cardTitle">
                  <a href="javascript:void(0)">
                    <h5 class="iq-tw-7 iq-mb-10">Creating Views</h5>
                  </a>
                </div>
                <div slot="cardBody">
                  <p>Views contain the HTML served by your application and separate your controller / application logic from your presentation logic. </p>
                </div>
                <div slot="cardFooter">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)"><i class="fa fa-comment" aria-hidden="true" /> 5</a>
                    </li>
                  </ul>
                </div>
              </CardStyle1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Blog'
}
</script>
