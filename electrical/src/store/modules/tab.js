import { TabList ,getTab} from "../../services/index";
const state = {
  list: [],
  parentId:0,
  Lists:[]
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
  async getTabList({ commit }, payload) {
    console.log('payload...',payload)
    let data = await getTab(payload);
    // console.log(data)
    commit('getTabLists', data)
  },
}
//同步改变,改变数据的唯一途径
const mutations = {
  SetTabList(state, payload) {
    // console.log('pat',payload)
    state.list = payload.result;
    console.log("state.list...", state.list)
  },
  getTabLists(state, payload) {
    // console.log('pat',payload)
    state.Lists = payload.result;
    console.log("state.lISTS...", state.Lists)
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}