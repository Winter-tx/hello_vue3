// 引入createApp用于创建应用
import {createApp} from 'vue'

// 引入APP根组件: 找本地APP.vue文件中, script标签中暴露的组件名称
import Application from './App.vue'

createApp(Application).mount('#app')