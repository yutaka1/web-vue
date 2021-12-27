<template>
  <div id="admin">
    <Header />
    <body>
      <div>
        <component :is="homeBody"></component>
        <!-- <Category /> -->
      </div>
    </body>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Category from "@/components/Category.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Category,
  },
  computed: {
    homeBody() {
      console.log(this.$route.name)
      switch (this.$route.name) {
        case "Category":
          return "Category";
        default:
          return "Category";
      }
    },
  },
};
</script>