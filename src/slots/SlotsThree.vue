<template>
    <h3>插槽再续集</h3>
    <slot name="header" :msg="childMessage">默认内容</slot>
    <slot name="main" :job="jobMessage">默认内容</slot>
</template>

<script>
export default {
   data(){
    return{
        childMessage:"子组件数据",
        jobMessage:"test"
    }
   }
}
</script>

<style>

</style>