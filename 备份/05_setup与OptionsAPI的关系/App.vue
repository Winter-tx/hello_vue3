<!-- HTML结构 -->
<template>
    <Person />
</template>


<!-- JS/TS -->
<script lang="ts">

import Person from './components/Person.vue';

// export: 暴露; default: 默认暴露
export default {
    name: 'Application',     // 组件名称(与mian.ts文件中: "import App from './App.vue'"相关联 )
    components: { Person }     // 注册组件(关联根组件Application与子组件Person)
}

</script>   