
<!-- HTML结构 -->
<template>
    <div class="app">
        <h1>Hello World!</h1>
        <Person/>
    </div>
</template>


<!-- JS/TS -->
<script lang="ts">

import Person  from './components/Person.vue';

// export: 暴露; default: 默认暴露
export default {
    name: 'Application',     // 组件名称(与mian.ts文件中: "import App from './App.vue'"相关联 )
    components:{Person}     // 注册组件(关联根组件Application与子组件Person)
}

</script>


<!-- CSS样式 -->
<style>
.app {
    /* 背景色 */
    background-color: antiquewhite;
    /* 阴影 */
    box-shadow: 0 0 10px;
    /* 圆角 */
    border-radius: 10px;
    /* 内边距 */
    padding: 20px;
}

</style>