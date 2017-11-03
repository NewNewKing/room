import Vue from 'vue'
import Router from 'vue-router'

import App from '../components/App.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Record from '../components/Record.vue'
import UserInfo from '../components/UserInfo.vue'
import RoomInfo from '../components/RoomInfo.vue'

Vue.use(Router);
export default new Router({
	routes:[
		{
			path:'/login',
			component:Login
		},
		{
			path:'/',
			redirect:"/login"
		},
		{
			path:'/home',
			component:Home,
			redirect:'/record',
			children:[
				{path:'/record',component:Record},
				{path:'/userInfo',component:UserInfo},
				{path:'/roomInfo',component:RoomInfo}		
			]
		}
	]
});