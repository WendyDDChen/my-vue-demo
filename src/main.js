import { createApp } from 'vue'
import App from './App.vue'
// import Header from './pages/Header.vue'


// app:vue的实例对象
// 在Vue项目中，有且只有一个Vue的实例对象
const app = createApp(App)

// App:根组件

// 全局注册组件-不推荐使用
// 在这中间写组件的注册
// app.component("Header",Header)

// 全局传递
app.provide("golavData","我是全局数据")

// 挂载应用
// 容器：#app
app.mount('#app')
