<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-21 22:58:38
-->
<template>
  <div>
      <h1>about Page</h1>
      <!-- a 连接，刷新导航，走服务端渲染 -->
      <h2>a 链接</h2>
      <a href="/">首页</a>

      <!-- router-link 导航链接组件 -->
      <h2>router-link</h2>
      <router-link to="/">首页</router-link>

      <!-- 编程式导航 -->
      <h2>编程式导航</h2>
      <button @click="onClick">首页</button>
  </div>
</template>

<script>
export default {
    name: 'aboutPage',
    methods: {
      onClick(){
        this.$router.push('/')
      }
    }
}
</script>

<style>

</style>