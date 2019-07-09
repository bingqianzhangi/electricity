<<<<<<< HEAD
import { Goothing, products, Tab } from "../../services/index";
const state = {
    list: [],
    productlist: [],
    tablist: []
=======
<<<<<<< HEAD
import { Goothing, products } from "../../services/index";
const state = {
    list: [],
    productlist: []
=======
import { Goothing } from "../../services/index";
const state = {
    list: []
>>>>>>> liangpengfei
>>>>>>> 83914513cd7a5d99f6a9050a03a0d4f56e6ca414
}
//派生数据
const getters = {

}
//异步改变
const actions = {
    //精选好物
    async Index({ commit }, payload) {
        let data = await Goothing(payload);
<<<<<<< HEAD
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
=======
        console.log("data..", data)
        commit('Goothings', data)
    }
>>>>>>> liangpengfei
>>>>>>> 83914513cd7a5d99f6a9050a03a0d4f56e6ca414
}
//同步改变,改变数据的唯一途径
const mutations = {
    //精选好物
    Goothings(state, payload) {
        state.list = payload.result;
<<<<<<< HEAD
=======
        console.log("state.list...", state.list)
<<<<<<< HEAD
>>>>>>> 83914513cd7a5d99f6a9050a03a0d4f56e6ca414
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
=======
>>>>>>> liangpengfei
    }
>>>>>>> 83914513cd7a5d99f6a9050a03a0d4f56e6ca414
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}