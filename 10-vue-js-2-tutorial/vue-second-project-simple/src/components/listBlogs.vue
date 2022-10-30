<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div class="single-blog" v-for="blog in filteredBlogs" v-bind:key="blog.id">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      <!-- <article>{{ blog.body | snippet }}</article> -->
    </div>
  </div>
</template>
<script>
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        console.log(
          "🚀 ~ file: showBlogs.vue ~ line 17 ~ this.$http ~ data",
          data
        );
        // this body is not object's body, it is response's body.
        this.blogs = data.body.slice(0, 10);
      });
    // this.$http
    //   .get("http://jsonplaceholder.typicode.com/posts")
    //   .then(function (data) {
    //     console.log(
    //       "🚀 ~ file: showBlogs.vue ~ line 17 ~ this.$http ~ data",
    //       data
    //     );
    //     this.blogs = data.body.slice(0, 10);
    //   });
  },
  computed: {
    // filteredBlogs: function () {
    //   return this.blogs.filter((blog) => {
    //     return blog.title.includes(this.search);
    //   });
    // },
  },
  filters: {
    /*'to-uppercase': function(value){
            return value.toUpperCase();
        }*/
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    // rainbow: {
    //   // eslint-disable-next-line no-unused-vars
    //   bind(el, binding, vnode) {
    //     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    //   },
    // },
  },
  mixins: [searchMixin],
};
</script>
<style>
#show-blogs {
  max-width: 800px;
  margin: 0, auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
