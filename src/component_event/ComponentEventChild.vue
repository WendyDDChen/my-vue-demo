<template>
    <h3>Child</h3>
    <button @click="clickEventHandle">传递数据</button>
</template>

<script>

export default {
    data() {
        return {
         
        }
    },
    methods:{
        clickEventHandle(){
            // 自定义事件
            this.$emit("someEvent","Child数据")
        }
    }

}
</script>