import { shopDel, shopRemind, shopChoose, shopPic, shopBounce, buyShop } from "@/services/shopDetail";

const state = {
    detailList:[],
    chooseList:[],
    picList:[],
    remind:'',
    type:{}
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
    async getChoose({ commit }, payload) {
        let data = await shopChoose(payload);
        commit('upChoose',data.result)
    },
    //商品详情图
    async getPic({ commit }, payload) {
        let data = await shopPic(payload);
        commit('upPic',data.result)
    },
    //商品详情提示
    async getRemind({ commit }, payload) {
        let data = await shopRemind(payload);
        commit('upRemind',data.result)
    },
    //商品详情底部弹框
    async getBounce({ commit }, payload) {
        let data = await shopBounce(payload);
        commit('upBounce',data.result);
    },
    async getbuy({ commit },payload) {
        let data = await buyShop(payload);
        console.log('getBounce',data);
        commit('upBuy',data);
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
    },
    upRemind(state,payload){
        state.remind=payload;
    },
    upBounce(state,payload){
        state.type=payload;
    },
    upBuy(state,payload){
        console.log(state)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}