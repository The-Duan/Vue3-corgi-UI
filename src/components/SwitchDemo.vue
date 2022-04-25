<template>
  <h1>Switch 开关</h1>
  <div class="demo">
    <h2>基本</h2>
    <div class="demo-component">
      <Switch1Demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
  </div>

  <div class="demo">
    <h2>尺寸 </h2>
    <div class="demo-component">
      <Switch1Demo/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
  </div>
  <div class="demo">
    <h2>不可用状态</h2>
    <Switch3Demo/>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Switch1Demo from './Switch/Switch1.demo.vue'
import Switch2Demo from './Switch/Switch2.demo.vue'
import Switch3Demo from './Switch/Switch3.demo.vue'
import {ref} from 'vue';

export default {
  components: {
    Switch,
    Switch1Demo,
    Switch2Demo,
    Switch3Demo,
  },
  setup() {
    const bool = ref(false);

    return {bool};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #DAA593;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>