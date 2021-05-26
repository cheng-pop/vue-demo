<demo>
采用openDialog函数打开 Dialog
</demo>
<template>
<div>
  <Button @click="showDialog">一键打开对话框</Button>
</div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
import {
  ref,
  h
} from 'vue'
import {
  openDialog
} from '../lib/openDialog'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '这是采用openDialog函数写出来的对话框',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>