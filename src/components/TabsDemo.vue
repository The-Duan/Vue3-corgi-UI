<template>
  <div>
    <h1>Tabs 标签页</h1>
    <div class="demo">
      <h2>基本</h2>
      <div class="demo-component">
        <Tabs1Demo/>
      </div>
      <div class="demo-actions">
        <Button @click="toggleCode">查看代码</Button>
      </div>
      <div class="demo-code" v-if="codeVisible">
      <pre class="language-css" v-html="Prism.highlight(Tabs1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';
import Tabs1Demo from './Tabs/Tabs1.demo.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

const Prism = (window as any).Prism;

export default {
  components: {
    Tabs1Demo,

    Tab,
    Tabs
  },
  setup() {
    const codeVisible = ref(false);
    const toggleCode = () => codeVisible.value = !codeVisible.value;
    const x = ref('导航1');
    return {
      x,
      Prism,
      Tabs1Demo,
      codeVisible,
      toggleCode,
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #daa593;
$border-color: #daa593;
Tabs2Demo{
  border: 1px solid red;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 6px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
    >div {
      margin: 10px 0;
    }
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