<template>
    <h3>ComponentB</h3>
    <p>{{message}}</p>
    <button @click="updateHangle">更新數據</button>
</template>

<script>
export default {
    data(){
        return{
            message:"老數據"
        }
    },
    beforeUnmount() {
        console.log("组件销毁之前");
    },
    unmounted() {
        console.log("组件销毁之後");
    },
    methods: {
        updateHangle(){
            this.message="新數據"
        }
    }
}
</script>