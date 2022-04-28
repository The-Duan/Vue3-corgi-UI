<template>
  <h1>Switch 开关</h1>
  <div class="demo">
    <h2>基本</h2>
    <div class="demo-component">
      <Switch1Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="Prism.highlight(Switch1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>

  <div class="demo">
    <h2>不可用状态</h2>
    <Switch3Demo/>
    <div class="demo-actions">
      <Button @click="toggleCodes">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisibles">
      <pre class="language-css" v-html="Prism.highlight(Switch3Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Switch1Demo from './Switch/Switch1.demo.vue'
import Switch3Demo from './Switch/Switch3.demo.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism=(window as any).Prism
import {ref} from 'vue';

export default {
  components: {
    Switch,
    Switch1Demo,
    Switch3Demo,
  },
  setup(props) {
    const bool = ref(false);
    const codeVisible=ref(false)
    const codeVisibles=ref(false)
    const toggleCode=()=>codeVisible.value=!codeVisible.value
    const toggleCodes=()=>codeVisibles.value=!codeVisibles.value
    return {
      bool,
      Switch1Demo,
      Switch3Demo,
      Prism,
      codeVisible,
      toggleCode,
      codeVisibles,
      toggleCodes
    };
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