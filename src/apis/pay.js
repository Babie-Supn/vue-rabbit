//封装付钱相关接口

import httpInstance from "@/utils/http";

//获取订单详情
export const getOrderAPI = (id) => {
  return httpInstance({
    url: `/member/order/${id}`,
  });
};
