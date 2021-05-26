<template>
  <div>
    <h2>Switch 开关 </h2>
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibiaoti-"></use>
        </svg>
        需要表示开关状态/两种状态之间的切换时；
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibiaoti-"></use>
        </svg>
        和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
      </li>
    </ul>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template> 
<script lang="ts">
import Demo from './codeVisibleDemo.vue'
import Switch1Demo from './Switch1Demo.vue'
import Switch2Demo from './Switch2Demo.vue'

export default {
    components:{
        Demo
    },
    setup() {
        return {Switch1Demo,
        Switch2Demo}
    }
}
</script>
<style lang="scss" scoped>
ul{
  margin: 10px;
  > li{
    padding: 6px;
    font-size: 14px;
    >svg{
      width: 7px;
      margin-right: 6px;
    }
  }
}
</style>