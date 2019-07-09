import { TabList } from "../../services/index";
const state = {
  list: [],
  parentId:0
}
//派生数据
const getters = {

}
//异步改变
const actions = {
  async Tab({ commit }, payload) {
    let params={}
    params.parentId=state.parentId;
    let data = await TabList(params);
    commit('SetTabList', data)
  },
}
//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state, payload) {
    // console.log('pat',payload)
    state.list = payload.result;
    console.log("state.list...", state.list)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}