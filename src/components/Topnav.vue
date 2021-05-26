<template>
        <div class="topnav">
            <router-link to="/" class="logo" >
              <svg class="icon">
                  <use xlink:href="#icon-lanmei"></use>
              </svg>
            </router-link>
            <ul class="menu">
                <li>
                  <router-link to="/doc">文档</router-link>
                </li>
            </ul>
            <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
              <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    props:{
      toggleMenuButtonVisible:{
        type:Boolean,
        default:false
      }
    },
    setup(){
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleMenu = ()=>{
            asideVisible.value = !asideVisible.value
        }
        return {toggleMenu}
    }
}
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 60px;
  background: white;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 14px rgb(228, 225, 225);
  >.logo {
    max-width: 6em;
    margin-right: auto;
    > svg{
      width: 36px;
      height: 36px;
    }
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
    >li:hover{
      color: #ac93d5;
    }
  }
  > .toggleAside{
    width: 28px;
    height: 28px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width:500px) {
    > .menu{
      display: none;
    }
    > .logo{
      margin: 0 auto;
    }
    > .toggleAside{
      display: inline-block;
    }

  }
  .router-link-active{
    text-decoration: none;
    
  }
  a {
  text-decoration: none; 
  }
}
</style>