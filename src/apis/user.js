//封装所有和用户相关的接口函数
import httpInstance from "@/utils/http";

export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};

//获取猜你喜欢的数据
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
