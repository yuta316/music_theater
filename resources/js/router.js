window.Vue = require('vue');

import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/test',
            component: () => import('./components/ExampleComponent'),
            name: 'example',
        }
    ]
})