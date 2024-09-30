<template>
    <h3>方法事件参数</h3>
    <!-- 单击 -->
    <button @click="addCount">Add</button>

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
        addCount(e) {
            
            // Vue中的event对象，就是原生JS的Event对象
            e.target.innerHTML="Add"+this.count

            // 读取data里面的数据的方案：this.count
             this.count ++
        }
    }
}

</script>
