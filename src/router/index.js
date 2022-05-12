import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

import Home from '../pages/Home'

export default new vueRouter({
    mode: 'history',
    routes:[
        {
            path: '/home',
            component: Home
        },
        {
            path: '/commodity/:id',
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
            path: '/question/:commodity',
        },
        {
            path: '/*',
            redirect: '/home'
        }
    ]
})