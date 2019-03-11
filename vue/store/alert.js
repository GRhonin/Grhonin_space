export default {
        namespaced: true,
        state: {
                isShow: false,     //alert组件当前是否显示
                message: ''        //alert组件当前的提示信息
        },
        getters: {},
        mutations: {
                open(state,payload){
                        state.isShow = true;
                        state.message = payload;
                },
                close(state){
                        state.isShow = false;
                        state.message = '';
                }
        },
        actions: {}
}