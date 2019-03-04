export default {
        namespaced: true,
        state: {
                paintingShow: false,
                isInit: false,
                list: [],
                isInit2: false,
                list2: []
        },
        getters: {},
        mutations: {
                paintingShow(state){
                        state.paintingShow = true;
                },
                paintingClose(state){
                        state.paintingShow = false;
                },
                _init(state, payload){
                        state.isInit = true;
                        state.list = payload;
                },
                _init2(state, payload){
                        state.isInit2 = true;
                        state.list2= payload;
                }
        },
        actions: {
                init( { state, commit, payload, rootState: { $http }}){
                        if(!state.isInit) $http.post('/product/paintingcategory').then(data => commit('_init', data));
                },
                init2({ state, commit, payload, rootState: { $http } }){
                        if(!state.isInit2) $http.post('/product/painting').then(data => commit('_init2', data));
                }
        }
}