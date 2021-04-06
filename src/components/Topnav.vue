<template>
        <div class="topnav">
            <div class="logo" @click="toggleMenu">LOGO</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
        </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup(){
        const asideVisible = inject<Ref<boolean>>('xxx')
        console.log(asideVisible.value)
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value
        }
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  >.logo {
    max-width: 6em;
    margin-right: auto;
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
}
</style>