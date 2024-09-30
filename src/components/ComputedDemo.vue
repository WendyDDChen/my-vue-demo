<template>
    <h3>{{itbaizhan.name}}</h3>
    <p>{{itbaizhanContent}}</p>
    <!-- <p>{{itbaizhanContents()}}</p> -->
</template>

<script>
export default {
    data() {
        return {
            itbaizhan: {
                name: "程序员",
                content: ["前端", "Java", "Python"]
            }
        }
    },
    // 计算属性
    computed:{
        itbaizhanContent(){
            return this.itbaizhan.content.length>0?'Yes':'No'
        }
    },
    // 函数或者方法
    methods:{
        itbaizhanContents(){
            return this.itbaizhan.content.length>0?'Yes':'No'
        }
    }

}
</script>