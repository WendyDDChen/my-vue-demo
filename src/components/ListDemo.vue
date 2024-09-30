<template>
    <h3>列表渲染</h3>
    <!-- <P v-for="(item,index) in names">{{ item }}-{{index}}</P> -->
    <P v-for="(item, index) of names">{{ item }}-{{ index }}</P>

    <div v-for="item in result">
        <p>{{ item.title }}</p>
        <img :src="item.avator"></img>
    </div>

    <div>
        <p v-for="(value, key, index) of userInfo">{{ value }}-{{ key }}-{{ index }}</p>
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
            ],
            userInfo: {
                name: "wendy",
                age: 18,
                sex: "女"
            }
        }
    }
}

</script>