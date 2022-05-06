import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

export default new vueRouter({
    mode: 'history',
    routes:[
        {
            path: '/home',
        },
        {
            path: '/commodity',
        },
        {
            path: '/longterm-care',
        },
        {
            path: '/oxygen-generator',
        },
        {
            path: '/connection',
        },
        {
            path: '/*',
            redirect: '/home'
        }
    ]
})