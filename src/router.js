import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: () => import('./applications/GoalTracker')
    }
];

const router = new Router({
    linkActiveClass: 'active',
    routes,
    mode: 'history'
});

export default router;