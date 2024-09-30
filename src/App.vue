<script setup>
import HelloWorld from './components/HelloWorld.vue'
import IfDemo from './components/IfDemo.vue'
import ListDemo from './components/ListDemo.vue';
import KeyDemo from './components/KeyDemo.vue';
import EventDemo1 from './components/EventDemo1.vue';
import EventDemo2 from './components/EventDemo2.vue';
import EventDemo3 from './components/EventDemo3.vue';
import EventDemo4 from './components/EventDemo4.vue';
import EventDemo5 from './components/EventDemo5.vue';
import EventDemo6 from './components/EventDemo6.vue';
import ArrayList from './components/ArrayList.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import ClassDemo from './components/ClassDemo.vue';
import StyleDemo from './components/StyleDemo.vue';
import WatchDemo from './components/WatchDemo.vue';
import ModelDemo from './components/ModelDemo.vue';
import RefDemo from './components/RefDemo.vue';
import MyComponent from './components/MyComponent.vue'
import ComponentMain from './component_v_model/ComponentMain.vue';
</script>

<template>
  <!-- <h3>模板语法</h3> -->

  <!-- 字符 -->
  <!-- <p>字符:{{ msg }}</p> -->

  <!-- 运算 -->
  <!-- <p>运算:{{ number + 1 }}</p> -->

  <!-- 判断 -->
  <!-- <p>判断:{{ ok ? 'Yes':'No' }}</p> -->

  <!-- 字符反转 -->
  <!-- <p>字符:{{ message}}，反转:{{ message.split('').reverse().join('') }}</p> -->

  <!-- 错误，非单一表达式 -->
  <!-- <p>{{var a = 0 }}</p> -->
  <!-- <p>{{if (ok) { return message } }}</p> -->

  <!-- <p>----------------------------------------</p> -->

  <!-- html绑定 -->
  <!-- <p>纯文本：{{ rawHtml }}</p>
  <p>属性：<span v-html="rawHtml"></span></p> -->

  <!-- <p>----------------------------------------</p> -->
  <!-- <HelloWorld /> -->
  <!-- <IfDemo /> -->
  <!-- <ListDemo /> -->
  <!-- <KeyDemo /> -->

  <!-- <EventDemo1 /> -->
  <!-- <EventDemo2 /> -->
  <!-- <EventDemo3 /> -->
  <!-- <EventDemo4 /> -->
  <!-- <EventDemo5 /> -->
  <!-- <EventDemo6 /> -->

  <!-- <ArrayList /> -->

  <!-- <ComputedDemo /> -->

  <!-- <ClassDemo /> -->

  <!-- <StyleDemo /> -->

  <!-- <WatchDemo /> -->

  <!-- <ModelDemo /> -->

  <!-- <RefDemo /> -->

  <!-- 第三步：显示组件 -->
  <!-- <MyComponent /> -->
  <!-- 不建议用这种 -->
  <!-- <my-component /> -->

  <!-- 组件嵌套关系 -->
  <!-- <Header />
  <Main />
  <Aside /> -->

  <!-- 父子组件 -->
  <!-- <Parent /> -->

  <!-- 组件事件(子传父：this.$emit) -->
  <!-- <ComponentEvent /> -->

  <!-- 组件事件(v-model) -->
  <!-- <ComponentMain /> -->

  <!-- 透传属性: 基本不用 -->
  <!-- <AttrComponents class="attr-container" /> -->

  <!-- 插槽 Slots-->
  <!-- <SlotsBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotsBase> -->

  <!-- 插槽内容续集 -->
  <!-- <SlotsTwo>
    <template #header>
      <h3>{{ message }}</h3>
    </template>
<template v-slot:main>
      <p>内容</p>
    </template>
</SlotsTwo> -->

  <!-- 插槽内容再续集 -->
  <!-- <SlotsThree v-slot="slotProps">
    <h3>{{ currentTest }}-{{slotProps.msg}}</h3>
  </SlotsThree> -->

  <!-- <SlotsThree>
    <template #header="slotProps">
      <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    </template>
    <template #main="slotProps">
      <h3>{{ slotProps.job }}</h3>
    </template>
  </SlotsThree> -->

  <!-- 组件生命周期 -->
  <!-- <MyComponent2 /> -->
  <!-- <UserComponent /> -->

  <!-- <KeepAlive>
    <Component :is="tabComponent"></Component>
  </KeepAlive>
  <button @click="changeHandle">切換組件</button> -->

  <!-- 依赖注入 -->
   <h3>祖宗</h3>
  <Parent2 title="祖宗的财产-逐级传递"/>

</template>

<script>

/**
 * 生命周期函数
 *  创建期：beforeCreate  created
 *  挂载期：beforeMounte  mounted
 *  更新期：beforeUpdate  updated
 *  销毁期：beforeUnmount unmounted
 */

// 局部注册组件
// 第一步：引入组件
import MyComponent from './components/MyComponent.vue'
import Header from './pages/Header.vue'
import Main from './pages/Main.vue';
import Aside from './pages/Aside.vue'
import Parent from './component_parent_child/Parent.vue';
import Parent2 from './component_parent_child/Parent2.vue';
import ComponentEvent from './component_event/ComponentEvent.vue';
import AttrComponents from './components/AttrComponents.vue';
import SlotsBase from './slots/SlotsBase.vue';
import SlotsTwo from './slots/SlotsTwo.vue';
import SlotsThree from './slots/SlotsThree.vue';
import MyComponent2 from './component_life/MyComponent.vue';
import UserComponent from './component_life/UserComponent.vue';
import ComponentA from './component_life/ComponentA.vue'
// import ComponentB from './component_life/ComponentB.vue'

// 异步加载组件
import { defineAsyncComponent } from 'vue'
const ComponentB = defineAsyncComponent(() =>
  import("./component_life/ComponentB.vue")
)

export default {
  data() {
    return {
      msg: "神奇的魔法",
      number: 10,
      ok: true,
      message: "大家好",
      rawHtml: "<a href='https://www.baidu.com'>百度</a>",
      message: "插槽内容续集",
      currentTest: "测试内容",
      message2: "更新之前",
      tabComponent: "ComponentA",
      injectMessage:"爷爷的财产-跨级传递"
    }
  },
  // provide 和 inject 只能由上到下的传递，不能反向传递
  // provide:{
  //   injectMessage:"爷爷的财产-跨级传递"
  // },
  provide(){
    return{
    injectMessage:this.injectMessage
    }
  },
  methods: {
    changeHandle() {
      this.tabComponent = this.tabComponent == "ComponentA" ? "ComponentB" : "ComponentA"
    }
  },
  // 第二步：注入组件
  components: {
    MyComponent,
    Header,
    Main,
    Aside,
    ComponentEvent,
    AttrComponents,
    SlotsBase,
    SlotsTwo,
    SlotsThree,
    MyComponent2,
    ComponentA,
    ComponentB,
    Parent2
  }
}
</script>
