import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
    { 
        path: '/', 
        component: () => import('@/views/home/index.vue'),
        children: [
            { path: '/demo1', component: () => import('@/views/demo1/index.vue')},
            { path: '/demo2', component: () => import('@/views/demo2/index.vue')},
            { path: '/mirco_demo1', component: () => import('@/views/mirco_demo1/index.vue')},
            { path: '/mirco_demo2', component: () => import('@/views/micro_demo2/index.vue')}
        ]
    },
]



const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach((to) => {
    if (to.path.startsWith('/micro-app')) return
  })

export default router