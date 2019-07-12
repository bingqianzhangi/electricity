import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
//引入子模块
import index from "./modules/index";
import shopDetail from './modules/shopDetail';
import tab from './modules/tab';
import my from "./modules/my"
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        index,
        shopDetail,
        tab,
        my
    },
    mutations: {

    },
    plugins: [createLogger()]
})