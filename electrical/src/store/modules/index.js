<<<<<<< HEAD
import { Goothing, products, Tab } from "../../services/index";
const state = {
    list: [],
    productlist: [],
    tablist: []


=======
import { Goothing, products } from "../../services/index";
const state = {
    list: [],
    productlist: []
>>>>>>> liangpengfei
}
//派生数据
const getters = {

}
//异步改变
const actions = {
    //精选好物
    async Index({ commit }, payload) {
        let data = await Goothing(payload);
        commit('Goothings', data)
    },
    //为你精选
    async Foryou({ commit }, payload) {
        let data = await products(payload);
        commit('productData', data)
    },
<<<<<<< HEAD


    //tab切换
    async Tabchange({ commit }, payload) {
        let data = await Tab(payload);
        commit('TabData', data)
    }

=======
>>>>>>> liangpengfei
}
//同步改变,改变数据的唯一途径
const mutations = {
    //精选好物
    Goothings(state, payload) {
        state.list = payload.result;
<<<<<<< HEAD

=======
        console.log("state.list...", state.list)
>>>>>>> liangpengfei
    },
    //为你精选
    productData(state, payload) {
        state.productlist = payload.result;
<<<<<<< HEAD
    },
    TabData(state, payload) {
        state.tablist = payload.result;
        // console.log("state.list...", state.productlist)
    },
=======
        console.log("state.list...", state.productlist)
    }
>>>>>>> liangpengfei
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}