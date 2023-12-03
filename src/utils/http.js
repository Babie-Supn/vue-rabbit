//axios基础的封装

import axios from "axios";
//导入提示信息的样式
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
//获取pinia数据
import { useUserStore } from "@/stores/userStore";
import router from "@/router";

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    //1.从pinia中获取token数据
    const userStore = useUserStore();
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    //2.按照后端的要求拼接token数据
    return config;
  },
  (e) => Promise.reject(e)
);

//axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    //统一错误提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    //判断，如果是401 Token失效处理
    //1. 清除本地用户处理
    //2.跳转登录页
    if (e.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);

export default httpInstance;
