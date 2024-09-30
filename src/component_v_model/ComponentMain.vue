<template>
    <h3>Main（组件 v-model）</h3>
    <p>搜索内容为：{{ search }}</p>
    <ComponentSearch @searchEvent="getSearch" />
</template>

<script>
import ComponentSearch from './ComponentSearch.vue'

export default {
    data() {
        return {
            search: ""
        }
    },
    components: {
        ComponentSearch
    },
    methods: {
        getSearch(data) {
            this.search = data;
        }
    }
}
</script>