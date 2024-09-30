<template>
  <!-- <div v-bind:id="dynamicId" v-bind:class="dynamicClass" v-bind:title="dynamicTitle">APPID</div> -->
  <!-- 绑定的简写 -->
  <div :id="dynamicId" :class="dynamicClass" :title="dynamicTitle">APPID</div>
  
  <button :disabled="isButtonDisabled">Button</button>

  <!-- 动态绑定多个 -->
  <div v-bind="objectOfAttrs">测试</div>
</template>

<script>

export default {
  data() {
    return {
      dynamicId: "appid",
      dynamicClass: "appclass",
      dynamicTitle: undefined,
      isButtonDisabled: true,
      objectOfAttrs: {
        id: "appid",
        class: "appclass",
      }
    }
  }
}

</script>

<style>
.appclass {
  color: red;
  font-size: 30px;
}
</style>
