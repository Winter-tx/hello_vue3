// 引入createApp用于创建应用
import {createApp} from 'vue'

// 引入Application根组件: 找本地APP.vue文件中, script标签中暴露的组件名称
import Application from './App.vue'

// createApp(App):创建一个前端应用, 且这个应用的根组件(把花插入花盆)
// mount('#app'): 挂载至一个ID为APP的容器中(花盆摆放位置)
createApp(Application).mount('#app')