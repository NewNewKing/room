import Vue from 'vue';
import App from './components/App'
import router from './router/index'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import $ from './js/jquery-1.11.3.min.js'

window.$ = $;

Vue.use(ElementUi);

new Vue({
	el:'#app',
	template:'<App/>',
	router,
	components:{App}
});