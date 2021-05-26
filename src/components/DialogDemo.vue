<template>
    <h2>Dialog 示例</h2>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
</template> 
<script lang="ts">
import Demo from './codeVisibleDemo.vue';
import Dialog1Demo from './Dialog1Demo.vue';
import Dialog2Demo from './Dialog2Demo.vue';
export default {
    components:{
       Demo
    },
    setup(){

        return { Dialog1Demo,
      Dialog2Demo}
    }
}
</script>
<style lang="scss" scoped>
    
</style>