//管理用户相关数据
import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    //1.定义管理用户数据的state
    const userInfo = ref({});
    //2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    return {
      userInfo,
      getUserInfo,
    };

    //3.以对象的格式将state和action函数return出去
  },
  {
    persist: true,
  }
);
