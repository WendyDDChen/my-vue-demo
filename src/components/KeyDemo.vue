<template>
    <h3>Key 属性添加到v-for中</h3>
    <p v-for="(item, index) in names" :key="index">{{ item }}</p>
    <div v-for="item in result" :key="item.id">
        <p>{{ item.title }}</p>
        <img :src="item.avator" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["程序猿", "程序员", "IT"],
            result: [
                {
                    "id": 4555,
                    "title": "test1",
                    "avator": "https://pixabay.com/zh/images/search/%E5%9B%BE%E7%89%87/"
                },
                {
                    "id": 122,
                    "title": "test2",
                    "avator": "https://www.shutterstock.com/zh-Hant/images"
                },
            ]
        }
    }
}
</script>