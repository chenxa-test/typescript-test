const state : object = {
  num: 0
};
const mutations : object = {
  CHANGE_NUM: (state : object, value : number) => {
    state['num'] = value
  }
}
const actions : object = {
  changeNum: (commit : Function, value : number) => {
    commit('CHANGE_NUM', value)
  }
}
export default {
  state,
  mutations,
  actions
};
