import { Goothing } from "../../services/index";
const state = {
    list: []
}
//派生数据
const getters = {

}
//异步改变
const actions = {
    async Index({ commit }, payload) {
        let data = await Goothing(payload);
        console.log("data..", data)
        commit('Goothings', data)
    }
}
//同步改变,改变数据的唯一途径
const mutations = {
    Goothings(state, payload) {
        state.list = payload.result;
        console.log("state.list...", state.list)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}