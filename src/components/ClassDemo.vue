<template>
    <p :class="{ 'active': isActive, 'text-danger': hasError }">class 样式绑定</p>

    <p :class="classObject">class 样式绑定2</p>

    <p :class="[arryActive,arrHasError]">class 样式绑定3</p>

    <p :class="[isActive?'active':'']">class 样式绑定4</p>

    <p :class="[isActive?'active':'',{'text-danger': hasError }]">class 样式绑定5</p>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,
            classObject:{
                'active':true,
                'text-danger':false
            },
            arryActive:'active' ,
            arrHasError:'text-danger'          
        }
    }
}
</script>
<style>
.active {
    font-size: 30px;
}

.text-danger {
    color: red;
}
</style>