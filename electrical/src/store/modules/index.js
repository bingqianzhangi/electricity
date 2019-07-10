import { Goothing, products ,labelquery } from "../../services/index";
const state = {
    list: [],
    productlist: [],
    //点击轮播图数据
    bannerList:[]
}
//派生数据
const getters = {

}
//异步改变
const actions = {
    async Index({ commit }, payload) {
        let data = await Goothing(payload);
        commit('Goothings', data)
    },
    async Foryou({ commit }, payload) {
        let data = await products(payload);
        console.log("data..", data)
        commit('productData', data)
    },
    async Query({ commit }, payload) {
        console.log('payload....',payload)
        let data = await labelquery(payload);
        console.log("data..", data)
        commit('labelData', data.result)
    }
}
//同步改变,改变数据的唯一途径
const mutations = {
    Goothings(state, payload) {
        state.list = payload.result;
        console.log("state.list...", state.list)
    },
    //为你精选
    productData(state, payload) {
        state.productlist = payload.result;
        console.log("state.list...", state.productlist)
    },
    //标签列表
    labelData(state, payload){
        // state.bannerList = payload;
        // console.log("state.list...", state.bannerList)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}