<template>
    <h3>儿子</h3>
    <p>{{ title }}</p>
    <p>{{injectMessage}}</p>
    <p>{{golavData}}</p>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        }
    },
    inject:["injectMessage","golavData"]
}
</script>