<template>
    <h3>数组变化侦听</h3>
    <button @click="addListHandle">添加数据</button>
    <ul>
        <li v-for="(item, index) of names" :key="index">{{ item }}</li>
    </ul>

    <button @click="concatHandle">合并数组</button>
    <h3>数组1</h3>
    <p v-for="(item, index) of nums1" :key="index">{{ item }}</p>

    <h3>数组2</h3>
    <p v-for="(item, index) of nums2" :key="index">{{ item }}</p>

</template>

<script>
export default {
    data() {
        return {
            names: ["iwen", "ine", "frank"],
            nums1: [1, 2, 3, 4, 5],
            nums2: [6, 7, 8, 9, 10]
        }
    },
    methods: {
        addListHandle() {
            // 引起UI自动更新
            // this.names.push("sakura")

            // 不会引起UI自动更新
            // this.names.concat(["sakura"])
            // console.log(this.names.concat(["sakura"]))

            this.names = this.names.concat(["sakura"])

            console.log(this.names)
        },
        concatHandle(){
            this.nums1=this.nums1.concat(this.nums2)
        }
    }
}
</script>