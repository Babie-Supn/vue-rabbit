//订单相关接口

import httpInstance from "@/utils/http";

//获取详情接口
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};

//创建订单
/**
 *
 * @param {*} data
 * @returns
 *  data:{
 *  deliveryTimeType integer 配送时间
 *  payType  integer 支付方式
 *  payChannel   integer 支付渠道
 *  buyerMessage string 买家备注
 *  goods array[]  订单内商品集合
 *       {
 *       skuId,
 *       count，
 *       addressId
 *       }
 *
 * }
 */
export const createOrderAPI = (data) => {
  return httpInstance({
    url: "/member/order",
    method: "POST",
    data,
  });
};
