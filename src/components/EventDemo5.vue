<template>
    <h3>事件传数</h3>
   <p @click="getNameHandler(item,$event)" v-for="(item,index) of names" :key="index">{{item}}</p>

</template>

<script>

export default {
    data() {
        return {
            names: ["iwen","ine","frank"]
        }
    },
    methods: {
        getNameHandler(name,e) {
            console.log(name,e);
        }
    }
}

</script>
