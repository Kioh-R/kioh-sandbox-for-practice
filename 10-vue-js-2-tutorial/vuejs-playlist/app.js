new Vue({
  el: "#vue-app",
  data: {
    name: "Shaun",
    job: "Ninja",
    website: "http://www.yahoo.co.jp",
    websiteTag: '<a href="http://www.yahoo.co.jp">Yahoo!!!!!</a>',
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name;
    },
  },
});
