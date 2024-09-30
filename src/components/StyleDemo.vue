<template>
    <p :style="{ color: activeColor, foneSize: fontSize + 'px' }">Style 样式绑定1</p>
    <p :style="styleObject">Style 样式绑定2</p>
    <p :style="[styleObject]">Style 样式绑定3</p>
</template>

<script>
export default {
    data() {
        return {
            activeColor: "green",
            fontSize: 30,
            styleObject:{
                color:"red",
                foneSize:"30px"
            }
        }
    }

}
</script>