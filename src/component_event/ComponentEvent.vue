<template>
    <h3>组件事件(子传父：this.$emit)</h3>
    <ComponentEventChild @someEvent="getHandle" />
    <p>父元素：{{ message }}</p>
</template>

<script>

/**
* 组件之间传递数据的方案：
* 1.父传子：props
* 2.子传父：自定义事件（this.$emit）
*/

import ComponentEventChild from './ComponentEventChild.vue';

export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        ComponentEventChild
    },
    methods: {
        getHandle(data) {
            console.log("触发了", data);
            this.message = data;
        }
    }

}
</script>

