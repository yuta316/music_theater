require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';

import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// vue-quill-editor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

// font awsome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

const app = new Vue({
    el: '#app',
    render: (h) => h(App), //id="app"の部分にAppコンポーネントを差し込む
    router,
});
