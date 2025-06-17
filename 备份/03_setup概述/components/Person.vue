<template>

    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>

        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">年龄+1</button>

        <!-- @click: 监听点击事件 -->
        <button @click="showTel">查看联系方式</button>

    </div>
</template>


<script>
export default {


    /* 
    name, data, methods 等都为选项式API(配置项式API)

    setup也是一个配置项
    */

    // 暴露的组件名称
    name: 'Person',



    // 判断setup执行时机: setup先调用, beforeCreate后调用
    // 判断setup执行时机-生命周期
    beforeCreate() {
        console.log('beforeCreate被调用')  
    },


    setup() {

        // 判断setup执行时机-生命周期
        console.log('setup被调用')


        // 数据 ==============================================================
        // 数据原来是写在data中的, 此时的name, age, tel都不是响应式的数据
        // 响应式: 当数据发生变化时, 使用到的地方会自动更新
        let name = '张三'
        let age = 18
        let tel = 13211111111


        // 方法 ==============================================================

        // vue3在setup中没有维护this关键字, 则不能使用(控制台打印为: undefined); vue3中已经弱化this了
        console.log('setup-this: ',this)

        function changeName() {
            name = '李四'
            // 这里更新name页面并不会有变化, 因为name不是响应式数据(页面引用name的地方不会更新)
            console.log('changeName方法被调用;  更新后name:', name)
        }
        function changeAge() { 
            age += 1
            // 这里更新age页面并不会有变化, 因为age不是响应式数据(页面引用age的地方不会更新)
            console.log('changeAge方法被调用;  更新后name:', age)
        }
        function showTel() {
            console.log('showTel方法被调用')
            alert(tel)
         }


        // return { a: name, b: age }
        // return { name: name, age: age }
        return { 
            name, age ,
            changeAge, changeName, showTel
        }

        // 
    }

}

</script>


<style>
.person {
    /* 背景色 */
    background-color: aquamarine;
    /* 阴影 */
    box-shadow: 0 0 10px;
    /* 圆角 */
    border-radius: 10px;
    /* 内边距 */
    padding: 20px;
}


button {
    margin: 0 10px;
}
</style>