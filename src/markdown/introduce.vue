<template>
  <div>
    <article class="markdown-body" v-html="md">
    </article>
  </div>
</template>
<script>
import md from './intro.md'
export default {
  data(){
    return{md}
  }
}
</script>
<style lang="scss" scoped>
div > .markdown-body {
  background-color: rgba(0, 0, 0, 0);
}
</style>