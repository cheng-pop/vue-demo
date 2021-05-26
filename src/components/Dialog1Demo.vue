<demo>
基本用法
</demo>
<template>
<div>
  <Button @click="toggle">点击打开对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>这是对话内容</strong>
      <div>内容1......</div>
      <div>内容2......</div>
    </template>
    <template v-slot:title>
      <strong>这是标题</strong>
    </template>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>