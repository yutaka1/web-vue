<template>
  <Home />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  padding-top: 35px;
  padding-bottom: 50px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#head-color {
  font-weight: bold;
  color: red;
}

.header-text-style {
  color: #707070;
  text-decoration: initial;
  font-size: 16px;
}

.component-color {
  font-weight: bold;
  background-color: #f7f7f7;
}

.head-bgcolor {
  font-weight: bold;
  background-color: red;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  left: 0;
  position: fixed;
}

#footer-color {
  font-weight: bold;
  color: white;
  background-color: black;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
}
</style>
