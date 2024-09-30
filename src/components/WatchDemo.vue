<template>
    <h3>侦听器</h3>
    <p>{{ message }}</p>
    <button @click="clickHandle">修改数据</button>
</template>

<script>
export default {
    data() {
        return {
            message: "前端"
        }
    },
    methods: {
        clickHandle() {
            this.message = "python"
        }
    },
    // 侦听器
    watch: {
        
        // newValue 改变之后的数据
        // oldValue 改变之前的数据
        // 函数名必须与侦听的数据对象保持一致
        message(newValue, oldValue) {
            // 数据发生辩护，自动执行的函数
            console.log(newValue, oldValue)
        }
    }



}
</script>