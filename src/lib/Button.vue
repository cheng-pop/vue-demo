<template>
    <div :size="size">
        <!-- $artts获取所有属性 -->
        <button v-bind="rest">
            <slot />
        </button>
    </div>
</template>
<script lang="ts">
export default {
   inheritAttrs:false ,  //继承属性关闭 (默认绑定)
   setup(props,context) {
       const {size,...rest} = context.attrs
       return {size,rest}
   }
}
</script>