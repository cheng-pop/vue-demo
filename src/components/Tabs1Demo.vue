<demo>
基本用法
</demo>
<template>
<Tabs v-model:selected="x">
  <Tab title="水果">芒果，香蕉，苹果，草莓，西瓜........</Tab>
  <Tab title="蔬菜">芹菜，青菜，萝卜，包菜，空心菜........</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('水果')
    return {
      x
    }
  }
}
</script>