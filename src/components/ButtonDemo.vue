<template>
  <h1>Button 示例</h1>
  <div class="demo">
    <h2>基本</h2>
    <div class="demo-component">
      <Button1Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode1">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible1">
      <pre class="language-css" v-html="Prism.highlight(Button1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>

  <div class="demo">
    <h2>尺寸</h2>
    <div class="demo-component">
      <Button2Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode2">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible2">
      <pre class="language-css" v-html="Prism.highlight(Button1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>

  <div class="demo">
    <h2>等级</h2>
    <div class="demo-component">
      <Button3Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode3">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible3">
      <pre class="language-css" v-html="Prism.highlight(Button1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>

  <div class="demo">
    <h2>不可用状态</h2>
    <div class="demo-component">
      <Button4Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode4">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible4">
      <pre class="language-css" v-html="Prism.highlight(Button1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>

  <div class="demo">
    <h2>加载中状态</h2>
    <div class="demo-component">
      <Button5Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode5">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible5">
      <pre class="language-css" v-html="Prism.highlight(Button1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Button1Demo from './Button/Button1Demo.vue';
import Button2Demo from './Button/Button2Demo.vue';
import Button3Demo from './Button/Button3Demo.vue';
import Button4Demo from './Button/Button4Demo.vue';
import Button5Demo from './Button/Button5Demo.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  components: {
    Button1Demo,
    Button2Demo,
    Button3Demo,
    Button4Demo,
    Button5Demo,
    Button
  },
  setup(props) {
    const onClick = () => {
      console.log('hi');
    };
    const codeVisible1 = ref(false);
    const codeVisible2 = ref(false);
    const codeVisible3 = ref(false);
    const codeVisible4 = ref(false);
    const codeVisible5 = ref(false);
    const toggleCode1 = () => codeVisible1.value = !codeVisible1.value;
    const toggleCode2 = () => codeVisible2.value = !codeVisible2.value;
    const toggleCode3 = () => codeVisible3.value = !codeVisible3.value;
    const toggleCode4 = () => codeVisible4.value = !codeVisible4.value;
    const toggleCode5 = () => codeVisible5.value = !codeVisible5.value;
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      onClick,
      Prism,
      toggleCode1,
      toggleCode2,
      toggleCode3,
      toggleCode4,
      toggleCode5,
      codeVisible1,
      codeVisible2,
      codeVisible3,
      codeVisible4,
      codeVisible5
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #daa593;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 6px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;

    > div {
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

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}

button {
  margin: 5px 5px 5px 0px;
}
</style>