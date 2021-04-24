import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
// 全局axios
import axios from 'axios'
Vue.prototype.$axios=axios//把axios设置为所有vue组件实例成员属性,以后可以this.$axios使用异步请求
Vue.config.productionTip = false
// 全局过滤器的创建
Vue.filter('date',(val)=>{
  // 转换为年月日
  var date = new Date(val);
  var YY= date.getFullYear();
  var MM= date.getMonth() + 1;
  MM=MM>9?'MM':'0'+MM;
  var DD= date.getDate();
  DD=DD>9?'DD':'0'+DD;
  return YY+'-'+MM+'-'+DD
})
Vue.filter('datetime',(val)=>{
  // 转换为年月日时分秒
  var date = new Date(val);
  var YY = date.getFullYear();
  var MM= date.getMonth() + 1;
  MM=MM>9?'MM':'0'+MM;
  var DD= date.getDate();
  DD=DD>9?'DD':'0'+DD;
  var HH= date.getHours();
  HH=HH>9?'HH':'0'+HH;
  var MI = date.getMinutes();
  MI=MI>9?'MI':'0'+MI;
  var SS= date.getSeconds();
  SS=SS>9?'SS':'0'+SS;
  return YY+'-'+MM+'-'+DD+' '+HH+':'+MI+':'+SS
})
Vue.filter('currency',(val)=>{
  //把价格转换为￥xx.yy
  return '￥'+val.toFixed(2)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
