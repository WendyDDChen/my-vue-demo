<template>
    <h3>Parent 组件传递(父传子：props)</h3>
    <p>父元素：{{ msg }}</p>
    <Child :title="message" :age="age" :names="names" :userInfo="userInfo" :onEvent="dataFn" />
</template>

<script>
import Child from './Child.vue';

export default {
    data() {
        return {
            message: "动态数据",
            age: 20,
            names: ["iwen", "ime", "frank"],
            userInfo: {
                name: "wendy",
                age: 20
            },
            msg: ""
        }
    },
    components: {
        Child
    },
    methods: {
        dataFn(data) {
            this.msg = data;
        }
    }

}
</script>