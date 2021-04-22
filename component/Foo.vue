<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-22 19:10:39
-->
<template>
  <div>
    <h1>FooPage</h1>
    <ul>
      <li v-for="item in posts" :key="item.id"><nuxt-link :to="'article/'+ item.id">{{ item.title }}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooPage",
  props: ["posts"]
  
  /** 不是页面组件没有asyncData */
  // asyncData() {
  //   console.log('foo asyncData')
  //   return {
  //     foo: "bar",
  //   };
  // },
};
</script>

<style>
</style>