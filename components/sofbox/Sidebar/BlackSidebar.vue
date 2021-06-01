<template>
  <div class="left-side-blog">
    <div class="iq-widget">
      <BlackListingStyle1>
        <template v-slot:cardMedia>
          <img :src="image" class="img-fluid mb-3" alt="images">
        </template>
        <template v-slot:cardHeader>
          <h5>{{ name }}</h5>
        </template>
        <template v-slot:cardBody>
          <p class="mb-3">
            {{ description }}
          </p>
        </template>
      </BlackListingStyle1>
    </div>
    <div class="iq-widget">
      <h5 class="iq-widget-title text-white mb-4 title">
        Recent Posts
      </h5>
      <div v-for="(RecentPost,index) in RecentPosts" :key="index" class="media">
        <img class="mr-3" :src=" RecentPost.image" alt="image">
        <div class="media-body">
          <a href="javascript:void(0)">
            <h6 class="mt-0 iq-fw-4">{{ RecentPost.title }}</h6>
          </a>
          <i class="far fa-calendar-alt mr-2" />{{ RecentPost.date }}
        </div>
      </div>
    </div>
    <div class="iq-widget">
      <div class="iq-sidebar-widget ">
        <h5 class="iq-fw-8 mb-4 text-white title">
          Categories
        </h5>
        <ul v-for="(Categories,index) in categoriesData" :key="index" class="d-block">
          <li class="d-block mb-3">
            <a href="javascript:void(0)" class="iq-fw-5">{{ Categories.categoriesName }}<span>{{ Categories.count }}</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="iq-widget">
      <div class="iq-sidebar-widget">
        <div class="iq-widget-search position-relative">
          <input type="search" placeholder="Search Your Keyword" class="form-control placeholder search-btn">
          <a href="javascript:void(0)"> <i class="fa fa-search" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlackSidebar',
  data () {
    return {
      name: 'About Author',
      image: require('../../../assets/sofbox-sass-black/images/blog/clients/01.jpg'),
      description: 'Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.',

      categoriesData: [
        {
          categoriesName: 'Digtel Agency',
          count: '8'
        },
        {
          categoriesName: 'Creative',
          count: '5'
        },
        {
          categoriesName: 'Digital Marketing',
          count: '9'
        },
        {
          categoriesName: 'Creative',
          count: '3'
        },
        {
          categoriesName: 'Digital Marketing',
          count: '6'
        },
        {
          categoriesName: 'Digtel Agency',
          count: '4'
        },
        {
          categoriesName: 'Digital Marketing',
          count: '9'
        },
        {
          categoriesName: 'Digtel Agency',
          count: '2'
        },
        {
          categoriesName: 'Digital Marketing',
          count: '7'
        }
      ],

      RecentPosts: [
        {
          image: require('../../../assets/sofbox-sass-black/images/blog/blog-detail/01.jpg'),
          title: 'Fully dedicated finding.',
          date: '01 February 2019'
        },
        {
          image: require('../../../assets/sofbox-sass-black/images/blog/blog-detail/02.jpg'),
          title: 'Progravida nibh vel.',
          date: '01 February 2019'
        },
        {
          image: require('../../../assets/sofbox-sass-black/images/blog/blog-detail/03.jpg'),
          title: 'Auctor alinean.',
          date: '01 February 2019'
        },
        {
          image: require('../../../assets/sofbox-sass-black/images/blog/blog-detail/04.jpg'),
          title: 'Alinean sollicitudin.',
          date: '01 February 2019'
        }
      ]

    }
  }
}
</script>
