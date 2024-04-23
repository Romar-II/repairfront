import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RepairCalculatorView from "@/views/RepairCalculatorView.vue";
import ErrorView from "@/views/ErrorView.vue";
import OnlineShopView from "@/views/OnlineShopView.vue";
import BasketView from "@/views/BasketView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/online-shop',
        name: 'onlineShopRoute',
        component: OnlineShopView
    },
    {
        path: '/basket',
        name: 'basketRoute',
        component: BasketView
    },
    {
        path: '/calculator',
        name: 'repairCalculator',
        component: RepairCalculatorView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
