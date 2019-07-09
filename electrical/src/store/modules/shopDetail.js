import { shopDel, shopRemind, shopChoose, shopPic, shopBounce } from "@/services/shopDetail";

const state = {
    
}

//派生数据
const getters = {

}

//异步改变
const actions = {
    // async Index({ commit }, payload) {
    //     let data = await Goothing(payload);
    //     commit('Goothings', data)
    // }
}

//同步改变,改变数据的唯一途径
const mutations = {
    async getDetail({commit}, payload) {
        let data = await shopDel(payload)
        console.log(data);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}