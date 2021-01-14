import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../components/test1'
import main from '../components/main'
//安装路由
Vue.use(VueRouter);
//配置导出路由

export default new VueRouter({
  routes:[{
    //路由的路径
    path: '/content',
    name: '测试',
    //跳转组件
    component: test
  },{
    path: '/main',
    component: main
  }]
})
