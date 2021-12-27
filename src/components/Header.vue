<template>
  <div
    class="
      bd-header
      head-bgcolor
      pt-2
      d-flex
      align-items-stretch
      border-bottom border-dark
    "
  >
    <div
      class="container-fluid d-flex align-items-center component-color"
      id="app"
    >
      <h1 class="d-flex align-items-center fs-4 text-white mb-0">
        <p class="m-3">
          <router-link class="header-text-style" to="/category"
            >カテゴリ</router-link
          >
        </p>
        <p class="m-3">
          <router-link class="header-text-style" to="/#">メンズ</router-link>
        </p>
        <p class="m-3">
          <router-link class="header-text-style" to="/#"
            >ランキング</router-link
          >
        </p>
        <p class="m-3">
          <router-link class="header-text-style" to="/#">新着</router-link>
        </p>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  el: "#app",
};
</script>
 