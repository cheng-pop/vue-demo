<template>
  <div>
    导航栏 | 
    <router-link to="/">Home</router-link> | 
    <router-link to="/doc">Doc</router-link> 
  </div>
  <hr />
 <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'

export default {
  name: 'App',
  setup(){
    const asideVisible = ref(false)
    provide('xxx', asideVisible)
  }
}
</script>
