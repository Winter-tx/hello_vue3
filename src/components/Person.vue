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
    name, data, methods 等都为选项式API

    */

    // 暴露的组件名称
    name: 'Person',
    
    // 数据
    data() {
        return {
            name: '张三',
            age: 18,
            tel: 13211111111
        }
    },

    // 方法
    methods: {
        changeName(){
            this.name = '李四'
        },
        changeAge(){
            this.age += 1

        },
        showTel() {
            alert(this.tel)
        }
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


button{
    margin:  0 10px;
}
</style>