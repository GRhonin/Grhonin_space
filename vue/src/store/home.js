export default {
    namespaced: true,
    state: {
        isInit: false,
        list: [],
        isInit2: false,
        list2: []
    },
    getters: {},
    mutations: {
        _init(state, payload) {
            state.list = payload;
            state.isInit = true;
        },
        _init2(state, payload) {
            state.list2 = payload;
            state.isInit2 = true;
        }
    },
    actions: {
        init({ state, commit, rootState: { $http } }) {
            if (!state.isInit) $http.post('/banner').then(data => commit('_init', data));
        },
        init2({ state, commit, rootState: { $http } }) {
            if (!state.isInit2) $http.post('/details').then(data => commit('_init2', data));
        }
    },
};