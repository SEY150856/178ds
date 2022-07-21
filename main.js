import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import * as utils from './utils/utils' // 工具文件
import * as http from './utils/http' // http请求接口
import storage from '@/storage' // 缓存文件
import config from '@/config' // 配置
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
Vue.prototype.$storage = storage
Vue.prototype.$http = http
Vue.prototype.$utils = utils
Vue.prototype.$config = config

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
