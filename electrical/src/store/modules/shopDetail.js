import { shopDel, shopRemind, shopChoose, shopPic, shopBounce } from "@/services/shopDetail";

const state = {
    detailList:[]
}

//派生数据
const getters = {
    
}

//异步改变
const actions = {
    async getDetail({ commit }, payload) {
        // payload.pid=JSON.stringify(payload.pid)
        let data = await shopDel(payload);
        // console.log('111',payload.pid)
        commit('upDetail', data)
    }
}

//同步改变,改变数据的唯一途径
const mutations = {
    upDetail(state,payload){
        state.detailList=payload;
        console.log(payload)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}