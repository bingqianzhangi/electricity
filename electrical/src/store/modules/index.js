import { Goothing, products, search, labelquery } from "../../services/index";
const state = {
    list: [],
    productlist: [],
    searchlist: [],
    bannerList: []
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
    //搜索页面
    async getsearchlist({ commit, state }, payload) {
        let data = await search(
            {
                queryWord: payload.queryWord,
                queryType: payload.queryType,
                querySort: payload.querySort,
                pageIndex: payload.pageIndex
            }
        );
        console.log("payload", data)
        commit('searchData', data);
        return data;
    },

    async Query({ commit }, payload) {
        console.log('payload....', payload)
        let data = await labelquery(payload);
        console.log("data..", data)
        commit('labelData', data.result)
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
    searchData(state, payload) {
        state.searchlist = payload.result;
    },
}
    //标签列表

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}