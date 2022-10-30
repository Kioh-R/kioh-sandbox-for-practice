export default {
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.includes(this.search);
      });
    },
  },
  directives: {
    rainbow: {
      // eslint-disable-next-line no-unused-vars
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
  },
};
