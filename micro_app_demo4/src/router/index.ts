import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { 
        path: '/micro-app/micro-app-demo4/home', 
        component: () => import('@/view/home/index.vue'),
    },
    { 
        path: '/micro-app/micro-app-demo4/blog', 
        component: () => import('@/view/blog/index.vue'),
    },
    { 
        path: '/micro-app/micro-app-demo4/about', 
        component: () => import('@/view/about/index.vue'),
    },
]



const router = createRouter({
    // routes: routes,
    history: createWebHashHistory(),
    routes: [
        {
          path: '/micro-app/micro-app-demo4',
          component: () => import('../layout/home/index.vue'),
          redirect: '/micro-app/micro-app-demo4/home',
          children: [...routes],
        },
      ],
    
})

export default router