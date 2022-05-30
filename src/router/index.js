import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

import Home from '../pages/Home'
import LongtermCare from '../pages/Longterm-care'
import CareQualifications from '../pages/Care-qualifications'
import CareSubsidy from '../pages/Care-subsidy'
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
            path: '/longterm-care',
            component: LongtermCare,
            children: [
                {
                    path: 'care-qualifications',
                    name: 'care-qualifications',
                    component: CareQualifications
                },
                {
                    path: 'care-subsidy',
                    name: 'care-subsidy',
                    component: CareSubsidy
                }
            ]
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
            redirect: '/longterm-care'
        }
    ]
})