<template>
    <!-- 必须是唯一根元素 -->
    <h3>透传属性</h3>
</template>

<script>
export default {
    // 禁止透传
    inheritAttrs:false
}
</script>

<style>
.attr-container{
  color: red;
}
</style>