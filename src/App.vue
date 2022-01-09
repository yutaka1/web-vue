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
  color: #2c3e50;
}


body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

main {
  width: 65%;
}

a {
  color: #333;
  text-decoration: none;
}

article a {
  color: #333;
  text-decoration: none;
}

a h4 {
  color: #333;
  text-decoration: none;
}

main .text {
  padding: 10px 40px 20px 40px;
}

.archive a {
  color: #333;
  text-decoration: none;
}

.archive li {
  font-size: 0.875rem;
  border-top: solid 1px #777;
  padding: 20px;
  text-align: left;
}

a p {
  padding: 5px 0;
  margin: 0;
  color: #fff;
  text-decoration: none;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

#sidebar {
  width: 33%;
  padding: 20px;
}

#container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.author {
  text-align: center;
  margin-bottom: 60px;
}

main .article-title {
  font-size: 1.5rem;
  margin: 10px 0 15px 0;
}

.author img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 30px;
}

#sidebar .side-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.author .profile {
  font-size: 0.875rem;
  text-align: left;
}

.readmore a {
  padding-bottom: 1px;
  color: #333;
  position: relative;
}

.no-text-deco {
  text-decoration: none;
}

.readmore {
  font-size: 0.875rem;
  text-align: center;
}

img {
  max-width: 100%;
}

.image-wrap {
  position: relative;
  overflow: hidden;
  padding-top: 60%;
  margin: 10px 5px;
  width: 300px;
}

.main-image-wrap {
  position: relative;
  overflow: hidden;
  padding-top: 60%;
  margin: 10px 5px;
  width: 500px;
}

.image-wrap img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.main-image-wrap img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.ranking {
  text-align: center;
  margin-bottom: 60px;
}

.ranking .article-title {
  font-size: 0.875rem;
  font-weight: normal;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 10px;
}

#pickup {
  display: flex;
  justify-content: space-between;
  padding-top: 150px;
  margin-bottom: 60px;
}

#pickup .article-title {
  font-size: 1rem;
  margin: 10px 0 15px 0;
}

#navi {
  background-color: black;
}

#navi a {
  color: #fff;
  text-decoration: none;
}

#navi ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#navi li {
  font-size: 0.875rem;
  padding: 10px 60px 10px 0;
  font-weight: bold;
}

li {
  list-style: none;
}

#header {
  width: 100%;
  background-color: #2c3e50;
  position: fixed;
  z-index: 10;
}

#header .sitetile a {
  display: inline-block;
}

@media screen and (max-width: 767px) {
  #header .site-title {
    padding: 20px 16px;
  }
}

#header .site-title {
  padding: 20px 16px;
  line-height: 1px;
}

.wrapper {
  max-width: 1200px;
  padding: 0 16px;
  margin: 0 auto;
}

#footer {
  font-weight: bold;
  color: white;
  background-color: black;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 10px 16px;
  margin: 0;
  text-align: center;
}
</style>
