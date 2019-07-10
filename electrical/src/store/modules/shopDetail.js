import { shopDel, shopRemind, shopChoose, shopPic, shopBounce } from "@/services/shopDetail";

const state = {
    detailList:[],
    chooseList:[],
    picList:[]
}

//派生数据
const getters = {
    
}

//异步改变
const actions = {
    //商品详情信息
    async getDetail({ commit }, payload) {
        let data = await shopDel(payload);
        commit('upDetail', data.result)
    },
    //商品详情选择
    async getRemind({ commit }, payload) {
        let data = await shopChoose(payload);
        commit('upChoose',data.result)
    },
    //商品详情图
    async getPic({ commit }, payload) {
        let data = await shopPic(payload);
        console.log('pic',data)
        commit('upPic',data.result)
    }
}

//同步改变,改变数据的唯一途径
const mutations = {
    upDetail(state,payload){
        state.detailList=payload;
    },
    upChoose(state,payload){
        state.chooseList=payload;
    },
    upPic(state,payload){
        state.picList=payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}