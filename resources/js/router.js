window.Vue = require('vue');

import Router from 'vue-router'
Vue.use(Router)

// トップ画面を構成するLayout
import Layout from './layout/Layout'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            component: Layout,
        },
        {
            path: '/test',
            component: () => import('./components/ExampleComponent'),
            name: 'example',
        },
    ]
})