//封装订单相关
import httpInstance from "@/utils/http";

/**
 *
 * @param {
 *     orderState:0,(tab切换的状态)
 *     page:1,(当前的页数)
 *     pageSize:2（每页的条数）
 *    } params
 * @returns
 */
export const getUserOrderAPI = (params) => {
  return httpInstance({
    url: "/member/order",
    method: "GET",
    params,
  });
};
