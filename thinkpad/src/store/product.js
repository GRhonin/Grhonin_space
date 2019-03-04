export default {
        namespaced: true,
        state: {
                isInit: false,
                list: []
        },
        getters: {},
        mutations: {
                _init(state, payload){
                        state.list = payload;
                        state.isInit = true;
                }
        },
        actions: {
                init({ state, commit, payload, rootState: { $http } }){
                        if(!state.isInit) $http.post("/product").then(data => commit('_init', data));
                }
        }
}