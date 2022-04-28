<template>
  <div>Dialog示例</div>
  <div class="demo">
    <h2>基本</h2>
    <div class="demo-component">
      <Dialog1Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode1">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible1">
      <pre class="language-css" v-html="Prism.highlight(Dialog1Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>

  <div class="demo">
    <h2>一键打开</h2>
    <div class="demo-component">
      <Dialog2Demo/>
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode2">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible2">
      <pre class="language-css" v-html="Prism.highlight(Dialog2Demo.
      __sourceCode,Prism.languages.html,'html')"/>
    </div>
  </div>


</template>

<script lang="ts">
import Dialog1Demo from './Dialog/Dialog1.demo.vue';
import Dialog2Demo from './Dialog/Dialog2.demo.vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';
import 'prismjs';
import 'prismjs/themes/prism.css';

const Prism = (window as any).Prism;

export default {
  components: {
    Dialog1Demo,
    Dialog2Demo,
    Button,
    Dialog
  },
  setup() {
    const codeVisible1 = ref(false);
    const codeVisible2 = ref(false);
    const toggleCode1 = () => codeVisible1.value = !codeVisible1.value;
    const toggleCode2 = () => codeVisible2.value = !codeVisible2.value;
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
    };
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {
      x,
      toggle,
      f1, f2,
      showDialog,
      Prism,
      codeVisible1,
      codeVisible2,
      toggleCode1,
      toggleCode2,
      Dialog1Demo,
      Dialog2Demo
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
</style>