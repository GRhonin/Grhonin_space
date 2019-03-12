export default {
        namespaced: true,
        state: {
                isInit: false,
                account: null,
                isInit2: false,
                myOrder: []
        },
        getters: {},
        mutations: {
                _getAccount(state, payload){
                        state.isInit = true;
                        state.account = payload;
                },
                _getMyOrder(state, payload){
                        state.isInit2 = true;
                        state.myOrder = payload;
                }

        },
        actions: {}
}