import { Goothing, products, Tab } from "../../services/index";
const state = {
    list: [],
    productlist: [],
    tablist: []


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


    //tab切换
    async Tabchange({ commit }, payload) {
        let data = await Tab(payload);
        commit('TabData', data)
    }

}
//同步改变,改变数据的唯一途径
const mutations = {
    //精选好物
    Goothings(state, payload) {
        state.list = payload.result;

    },
    //为你精选
    productData(state, payload) {
        state.productlist = payload.result;

    },
    TabData(state, payload) {
        state.tablist = payload.result;
        // console.log("state.list...", state.productlist)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}