 ## 快速上手
 请先[<font color=#6553e5>安装</font>](#/doc/install)本组件库。
 
 ### 引入 ViewUI
 
 一般在 webpack 入口页面 <font color=red>main.js</font>中如下配置：
 ```javascript
 import Vue from 'vue';
 import VueRouter from 'vue-router';
 import App from 'components/app.vue';
 import Routers from './router.js';
 import ViewUI from 'view-design';
 import 'view-design/dist/styles/iview.css';
 
 Vue.use(VueRouter);
 Vue.use(ViewUI);
 
 // The routing configuration
 const RouterConfig = {
     routes: Routers
 };
 const router = new VueRouter(RouterConfig);
 
 new Vue({
     el: '#app',
     router: router,
     render: h => h(App)
 });
 
 ```
 ### 按需引用
 借助插件<font color=red>babel-plugin-import</font>可以实现按需加载组件，减少文件 体积。首先安装，并在文件 <font color=red>.babelrc</font> 中配置：
 ```javascript
 npm install babel-plugin-import --save-dev
 
 // .babelrc
 {
   "plugins": [["import", {
     "libraryName": "view-design",
     "libraryDirectory": "src/components"
   }]]
 }
 ```
 然后这样按需引入组件，就可以减小体积了：
 ```javascript
 import { Button, Table } from 'view-design';
 Vue.component('Button', Button);
 Vue.component('Table', Table);
 ```
