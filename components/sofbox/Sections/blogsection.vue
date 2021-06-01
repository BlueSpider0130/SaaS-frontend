<template>
  <div :class="classname">
    <div v-for="(blog,index) in blogs" :key="index" class="iq-blog-box">
      <div class="iq-blog-image clearfix">
        <img :src="blog.src" class="img-fluid center-block" alt="blogimage1">
        <div class="iq-blog-detail">
          <div class="iq-blog-meta">
            <ul>
              <li class="list-inline-item">
                <span class="screen-reader-text">Posted on</span> <a href="#" rel="bookmark">{{ blog.date }}</a>
              </li>
            </ul>
          </div>
          <div class="blog-title">
            <a href="#">
              <h5 class="mb-2">{{ blog.title }}</h5>
            </a>
          </div>
          <p class="mb-0">
            {{ blog.desc }}
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="pagination justify-content-center">
          <nav aria-label="Page navigation">
            <ul class="page-numbers justify-content-center">
              <li><span aria-current="page" class="page-numbers current">1</span></li>
              <li><a class="page-numbers" href="#">2</a></li>
              <li><a class="next page-numbers" href="#"><span aria-hidden="true">Next page</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blogsection',
  props: {
    classname: {
      type: String,
      required: true
    },
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>
