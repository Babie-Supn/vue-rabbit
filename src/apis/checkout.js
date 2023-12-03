//订单相关接口

import httpInstance from "@/utils/http";

export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};
