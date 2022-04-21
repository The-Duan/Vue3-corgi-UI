<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一款 普普通通, 平平无奇 的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/simple-ice/crisps-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>

<style lang="scss" scoped>
.banner{
  text-align: center;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >h2 {
    margin: 20px 0;
  }
  >.actions{
    >a{
      margin: 0 8px;
      background: rgb(249,191,175);
      display: inline-block;
      color: rgb(206,109,70);
      padding: 8px 24px;
      border-radius: 8px;
    }
  }
}
</style>