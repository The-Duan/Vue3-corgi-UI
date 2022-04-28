<demo>
加载中状态
</demo>
<template>
  <div class="button-demo-5">
    <Button loading>Loading</Button>
    <Button @click="onClick" :loading="isLoading">Click me</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {Button}
};
</script>

<style lang="scss" scoped>
.button-demo-5 {
  > div {
    > Button {
      margin: 5px 5px 5px 0px;
    }
  }
}
</style>