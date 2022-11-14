import App from './App' // 将APP.vue中定义的Vue对象导入
import Vue from 'vue' // 导入Vue对象
import uView from '@/uni_modules/uview-ui' // 导入uView-UI框架中的uView对象
import axios from './component' // 导入axios框架中的axios对象
import store from './store' // 导入VueX框架中的store对象

// 导入自定义组件
import safeheader from 'pages/safeheader.vue'
import mytabbar from 'component/mytabbar.vue'

// 服务器端渲染函数，供本地测试时，虚拟服务器使用
import {
    createSSRApp
} from 'vue'

// 关闭生产环境下提示
Vue.config.productionTip = false

// JavaScript是动态语言，支持在类定义好后，动态添加属性
Vue.prototype.$axios = axios
Vue.prototype.$store = store

// Vue.use起到安装插件作用，Vue.component起到添加组件的作用
Vue.use(uView)
// 将组件设置为全局组件
Vue.component('safeheader', safeheader)
Vue.component('mytabbar', mytabbar)

/* 
    App.vue组件被src/main.js引入并被设置了一个mpType的属性值，其值为app。
    这个值是为了与后面要讲的小程序页 面组件所区分开来，因为小程序页面组件
    和这个App.vue组件的写法和引入方式是一致的，为了区分两者，需要设置mpType值。
*/
App.mpType = 'app'
const app = new Vue({
    ...App
})
// 手动挂载
app.$mount()

export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}
