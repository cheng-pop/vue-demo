<template>
  <div>
    导航栏 | 
    <router-link to="/">Cheng</router-link> | 
    <router-link to="/xxx">Cheng1</router-link> 
  </div>
  <hr />
 <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>
