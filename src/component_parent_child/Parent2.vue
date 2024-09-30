<template>
    <h3>父亲</h3>
    <Child2 :title="title"/>
</template>

<script>
import Child2 from './Child2.vue';

export default {
    components: {
        Child2
    },
    props:{
        title:{
            type:String
        }
    }

}
</script>