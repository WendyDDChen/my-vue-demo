<template>
    <h3>组件生命周期</h3>
    <p ref="name">EY 安永</p>

    
<ul>
    <li v-for="(item,index) of banner" :key="index">
        <h3>{{item.title}}</h3>
        <P>{{item.content}}</P>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            banner: []
        }
    },
    beforeMount() {
        console.log(this.$refs.name);// undefined

    },
    mounted() {
        console.log(this.$refs.name);

        // 模拟网络请求
        this.banner = [{
            "title": "222",
            "content": "test2"
        },
        {
            "title": "333",
            "content": "test3"
        }
        ]
    }
}
</script>