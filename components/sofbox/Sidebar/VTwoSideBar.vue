<template>
  <div class="col-lg-4 col-sm-12 sidebar-service-right mt-5 mt-lg-0">
    <div id="search-2" class="widget widget_search">
      <form method="get" class="search-form" action="#">
        <label for="search-form-5e82f753d374f">
          <span class="screen-reader-text">Search for:</span>
        </label>
        <input type="search" class="search-field mb-5" placeholder="Search" value="" name="s">
        <button type="submit" class="search-submit">
          <i class="fa fa-search" /><span class="screen-reader-text">Search</span>
        </button>
      </form>
      <div class="post-details">
        <h4 class="mb-4">
          Recent Post
        </h4>
        <ul class="iq-post">
          <li v-for="(post,index) in posts" :key="index">
            <div class="post-img">
              <img :src="post.src" class="img-fluid" alt="img">
              <div class="post-blog">
                <div class="blog-box">
                  <a class="new-link" href="#"><h5>{{ post.title }}</h5></a>
                  <ul class="list-inline">
                    <li class="list-inline-item  mr-3">
                      <a class="date-widget" href="#"><i class="fa fa-calendar mr-2" aria-hidden="true" />{{ post.date }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="categories mt-5">
        <h4 class="mb-3">
          Categories
        </h4>
        <ul>
          <li v-for="(item,index) in items" :key="index" class="cat-item">
            <a href="#">{{ item.title }}</a><span class="post_count"> {{ item.num }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VTwoSideBar',
  props: {
    posts: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
