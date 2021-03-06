/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import QS from "qs";
// import { Toast } from "vant";
// import store from "../store/index";
// import router from "../router/index";

// export const http = "http://192.168.10.92:8080"; //谭静
//export const http = "http://192.168.10.106:8080"; //龙金伟
//export const http = "http://192.168.10.178:8080"; //星仔
// export const http = "http://192.168.10.59:8081"; //陈炜
//export const http ="https://easy-mock.com/mock" //测试地址
const http = "http://192.168.10.242:20030";
/**
 * 配置默认请求地址
 */
axios.defaults.baseURL = http;
// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded;charset=UTF-8";

axios.defaults.headers = {
  token: localStorage.getItem("token") || "",
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8"
};
// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     const token = store.state.token;
//     token && (config.headers.Authorization = token);
//     return config;
//   },
//   error => {
//     return Promise.error(error);
//   }
// );

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 404:
          // Toast({
          //   message: "网络请求错误",
          //   duration: 1500,
          //   forbidClick: true
          // });
          break;
        // 其他错误，直接抛出错误提示
        default:
        // Toast({
        //   message: error.response.data.message,
        //   duration: 1500,
        //   forbidClick: true
        // });
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
