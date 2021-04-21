/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 张泽涛
 * @LastEditors: 张泽涛
 * @LastEditTime: 2021-04-21 23:31:42
 */
module.exports = {
    router: {
        base: '/abc',
        /**
         * @param {Array} routes 路由配置表
         * @param {String} resolve 解析路由组件路径
         */
        extendRoutes(routes, resolve) {
            routes.push({
               path: '/hello',
               name: 'hello',
               component: resolve(__dirname, 'pages/about.vue'),
           })
        }
    }
}