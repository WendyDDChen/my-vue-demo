<template>
    <h3>Child</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>

    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>

    <!-- <button @click="updateHandle">修改数据</button> -->

    <P>{{onEvent("传递数据")}}</P>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    // 数据传递，只能从父级传递到子级，不能反其道而行
    // props 是只读的
    // props: ["title", "age", "names","userInfo"]
    props: {
        title: {
            type: String,//[String, Number, Array, Object],
            // 必选项
            required:true
        },
        age: {
            type: Number,
            default: 0
        },
        // 默认值：数字和字符串的可以直接default，但是如果是数组和对象，必须通过工厂函数返回默认值
        names: {
            type: Array,
            default() {
                return ["空"]
            }
        },
        userInfo: {
            type: Object
        },
        onEvent:Function
    },
    methods:{
        updateHandle(){
            // 错误的操作，不允许修改父元素船体过来的数据
            this.title = "新数据";
        }
    }
}
</script>