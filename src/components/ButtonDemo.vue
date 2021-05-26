<template>
  <div>
    <h2>Button 示例</h2>
      <Demo :component="Button1Demo" />
      <Demo :component="Button2Demo" />
      <Demo :component="Button3Demo" />
      <Demo :component="Button4Demo" />

</div>

</template> 
<script>
import Demo from "./codeVisibleDemo.vue";
import Button1Demo from "./Button1Demo.vue";
import Button2Demo from "./Button2Demo.vue";
import Button3Demo from "./Button3Demo.vue";
import Button4Demo from "./Button4Demo.vue";

export default {
    components:{
        Demo
    },
    setup(){
         return {
          Button1Demo,
          Button2Demo,
          Button3Demo,
          Button4Demo
    
    };
    }
}
</script>
<style lang="scss" scoped>
    
</style>