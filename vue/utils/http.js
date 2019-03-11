import axios from 'axios';
import {Loading, MessageBox} from 'element-ui';
// import {RedirectToLogin} from '../router';

const http = {};
let contentTypes = {
        get: 'application/x-www-form-urlencoded',
        post: 'application/json',
        upload: 'multipart/form-data'
};
let loadingInstance = null;
let alwaysPendingPromise = new Promise(() =>{
});  //一个永远是挂起状态的promise
let MyMessageBox = (message, type) =>{
        MessageBox.alert(message, {
                title: '提示',
                type,
                center: true,
                showClose: true
        });
};
// 在axios请求添加拦截器（在请求发出时触发），两个函数分别为成功和失败的处理
axios.interceptors.request.use(
        config =>{
                loadingInstance = Loading.service({
                        lock: true,
                        text: 'Loading ..'
                });
                return config;
        },
        error =>{
                loadingInstance.close();
                return Promise.reject(error);
        }
);
// 为axios响应添加拦截器，在相应回来还没执行then|catch前触发
axios.interceptors.response.use(
        response =>{
                setTimeout(() => loadingInstance.close(), 1);
                //下面这句是为了兼容IE9，这个b没有data属性，得用后面那玩意代替
                return response.data || JSON.parse(response.request.responseText);
        },
        error =>{
                loadingInstance.close();
                return Promise.reject(error);
        }
);
['get', 'post', 'upload'].forEach(item =>{
        http[item] = (url, params) =>{
                params = item === 'get' ? { params: params } : { data: params };
                return axios({
                        withCredentials: true,   //让axios发送ajax默认携带cookie
                        timeout: 15000,              //设置axios发送ajax最长等待时间(ms)，超出则认为本次请求失败
                        method: item === 'get' ? item: 'post',
                        url,
                        ...params,        //展开运算符，具体看笔记
                        //上面三目运算符，只有get方式才是params，其他都是data，upload就是一个特殊的post
                        headers: { 'Content-Type': contentTypes[item] }
                })
                        .then(({status, message, data}) =>{
                                if(message) MyMessageBox(message, status === 200 ? 'success' : 'warning');
                                switch(status){
                                        case 200:
                                                return data;
                                                break;
                                        case 999:
                                                RedirectToLogin();
                                        default:
                                                return alwaysPendingPromise;
                                }
                        })
                        .catch(error =>{
                                MyMessageBox(error.message, 'error');
                                return alwaysPendingPromise;
                        });
        }
});
export default http;