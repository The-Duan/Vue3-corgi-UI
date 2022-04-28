<demo>
不可用状态
</demo>
<template>
  <div class="button-demo-4">
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'

export default{
  components:{Button}
}
</script>

<style lang="scss" scoped>
.button-demo-4 {
  > div {
    > Button {
      margin: 5px 5px 5px 0px;
    }
  }
}
</style>