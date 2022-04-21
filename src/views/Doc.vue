<template>
  <div class="layout">
    <Topnav/>
    <div class="content">
      <aside>
        <div>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/introduce">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">快速上手</router-link>
            </li>

          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  components:{Topnav}
}
</script>

<style lang="scss" scoped>

</style>