import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

import Home from '../pages/Home'
import Subsidy from '../pages/Subsidy'
import OxygenGenerator from '../pages/Oxygen-generator'

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
            path: '/subsidy',
            component: Subsidy
        },
        {
            path: '/oxygen-generator',
            component: OxygenGenerator
        },
        {
            path: '/connection',
        },
        {
            path: '/question/:commodity',
        },
        {
            path: '/*',
            redirect: '/subsidy'
        }
    ]
})