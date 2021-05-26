<template>
    <h2>Tabs 示例</h2>
    <Demo :component="Tabs1Demo" />
</template> 
<script lang="ts">
import Demo from './codeVisibleDemo.vue'
import Tabs1Demo from './Tabs1Demo.vue'
export default {
    components:{
        Demo
    },
    setup(){
        return  {Tabs1Demo}
    }
}
</script>
<style lang="scss" scoped>
    
</style>