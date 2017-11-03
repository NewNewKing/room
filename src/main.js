import Vue from 'vue';
import App from './components/App'
import router from './router/index'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import $ from './js/jquery-1.11.3.min.js'

window.$ = $;

Vue.use(ElementUi);

router.beforeEach((to,from,next) => {
	if(to.path === '/login'){
		next();
	}else{
		var user = sessionStorage.getItem('user');
		user ? next() : next('/login');
	}
	
});


new Vue({
	el:'#app',
	template:'<App/>',
	router,
	components:{App}
});