<template>
    <h3>事件修饰符</h3>
    <!-- <a @click="clickHandle" href="http://wwww.baidu.com">baidu</a> -->
    <a @click.prevent="clickHandle" href="http://wwww.baidu.com">baidu</a>

    <div @click="clickDiv">
        <p @click.stop="clickP">测试冒泡</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            names: ["iwen", "ine", "frank"]
        }
    },
    methods: {
        clickHandle(e) {
            // 阻止默事件
            //e.preventDefault();
            console.log("点击了");
        },
        clickDiv() {
            console.log("Div")
        },
        clickP() {
            console.log("P")
        }
    }
}

</script>
