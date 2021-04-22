<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-22 19:03:29
-->
<template>
  <div>
    <h1>{{ title }}</h1>
    <nuxt-link to="/about">About</nuxt-link>
    <foo :posts="posts"/>
  </div>
</template>

<script>
import axios from "axios";
import Foo from '../component/Foo'

export default {
  components: {
    Foo
  },
  name: 'HomePage',
  // 当想要动态页面内容 有利于SEO 或者是提升首屏渲染速度，就在asyncData中发请求拿数据
  async asyncData(){
    console.log('asyncData')
    // asyncData中没有this
    console.log(this)
    const res = await axios({
      url: 'http://localhost:3000/data.json'
    })
    return res.data;
  },
  // 非异步数据，正常初始化data中
  data(){
    return{
      foo: 'bar'
    }
  }
}
</script>

<style>

</style>
