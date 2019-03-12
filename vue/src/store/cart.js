export default {
        namespaced: true,
        state: {
                list: [],
                isInit: false
        },
        mutations: {
                _init(state, payload){
                        state.isInit = true;
                       // 这个地方得到的是所有订单信息，包括已结账的部分,所以要删掉其他的
                        //不知道为什么push不好使，只能先删元素了
                        for(let i=0;i<payload.length;i++){
                                if(payload[i].state === '2' || payload[i].state === '3'){
                                        payload.splice(i,1);
                                        i--;
                                }
                        }
                        state.list = payload;
                        state.list.forEach(item => item.check = true);
                },
                toggle(state, payload){
                        for(let i=0; i<state.list.length;i++){
                                if(state.list[i].id === payload){
                                        // state.list[i].check = !state.list[i].check;
                                        let temp = state.list[i];
                                        temp.check = !temp.check;
                                        state.list.splice(i,1,temp);
                                        return;
                                }
                        }
                },
                toggleAll(state, payload){
                        let temp = state.list;
                        temp.forEach(item => item.check = payload);
                        state.list = temp;
                },
                _increase(state, payload){
                        for(let i = 0; i<state.list.length;i++){
                                if( state.list[i].id === payload ){
                                        state.list[i].count = state.list[i].count + 1;
                                }
                        }
                },
                _decrease(state, payload){
                        console.log(payload);
                        for(let i = 0; i<state.list.length;i++){
                                if( state.list[i].id === payload ){
                                        state.list[i].count = state.list[i].count - 1;
                                }
                        }
                },
                _balance( state, payload ){
                        payload.forEach(item => {
                                state.list.splice(state.list.indexOf(state.list.find(item2 => item2.id === item)),1);
                        })
                }
        },
        actions: {
                init({ state, commit, rootState: { $http }}, payload ){
                        if(state.isInit) return;
                        $http.post('/cart/getgoods', { name: payload })
                                .then(result => {
                                        commit('_init', result[0])
                                });
                },
                increase( { commit, rootState: { $http } }, payload ){
                        $http.post('cart/increase', { id: payload })
                                .then(() => commit('_increase', payload))
                },
                decrease( { commit, rootState: { $http } }, payload ){
                        $http.post('cart/decrease', { id: payload })
                                .then(() => commit('_decrease', payload))
                },
                balance({ state, commit, rootState: { $http } }){
                        let ids = [];
                        state.list.forEach(item => {
                                if(item.check) ids.push(item.id);
                        });
                        $http.post('cart/balance', { ids })
                                .then(() => commit('_balance', ids));
                },
                deleteGoods({ state, commit, rootState: { $http } }){
                        let ids = [];
                        state.list.forEach(item => {
                                if(item.check) ids.push(item.id);
                        });
                        $http.post('cart/delete', { ids })
                                .then(() => commit('_balance', ids));
                }
        }
};