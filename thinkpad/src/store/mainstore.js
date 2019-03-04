export default {
        namespaced: true,
        state: {
                isInit: false,
                list: [],
                isInit2: false,
                list2: [],
                isInit3: false,
                list3: [],
                isInit4: false,
                list4: []
        },
        getters: {},
        mutations: {
                _init(state, payload){
                        state.list = payload;
                        state.isInit = true;
                },
                _init2(state, payload){
                        state.list2 = payload;
                        state.isInit2 = true;
                },
                _init3(state, payload){
                        state.list3 = payload;
                        state.isInit3 = true;
                }
        },
        actions: {
                init({ state, commit, rootState: { $http } }){
                        if(!state.isInit) $http.post('/officialBanner').then(data => commit('_init', data));
                },
                init2({ state, commit, rootState: { $http } }){
                        if(!state.isInit2) $http.post('/officialProduct').then(data => commit('_init2', data));
                },
                init3({ state, commit, rootState: { $http } }){
                        if(!state.isInit3) $http.post('/officialstar').then(data => commit('_init3', data));
                }
        }
}