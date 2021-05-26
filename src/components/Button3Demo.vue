<demo>
    大小按钮
</demo>
<template>
    <div>
        <Button size="small">小号</Button>
        <Button>正常</Button>
        <Button size="big">大号</Button>
    </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>