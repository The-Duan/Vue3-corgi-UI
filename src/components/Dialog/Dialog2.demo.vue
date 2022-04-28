<demo>
一键打开
</demo>
<template>
  <div class="Dialog-demo-2">
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue';
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';


export default {
  components: {Dialog, Button},
  setup() {
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
    return {x, toggle, f1, f2, showDialog,};
  }
};
</script>

<style lang="scss" scoped>
.Dialog-demo-2 {
  > div {
    > Button {
      margin: 5px 5px 5px 0px;
    }
  }
}
</style>