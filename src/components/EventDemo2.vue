<template>
    <h3>方法事件处理器</h3>

    <!-- <button v-on:click="count++">Add</button> -->

    <!-- 单击 -->
    <button @click="addCount">Add</button>

    <!-- 双击 -->
    <!-- <button @dblclick="addCount">Add</button> -->

    <p>{{ count }}</p>

</template>

<script>

export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount() {
            // console.log("点击了")

            // 读取data里面的数据的方案：this.count
            this.count += 1
        }
    }
}

</script>
