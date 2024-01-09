import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import FriendItem from "@/components/FriendItem.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView
		},
		{
			path: '/friends/:id',
			name: 'friendItem',
			component: FriendItem,
		}
	]
})

export default router
