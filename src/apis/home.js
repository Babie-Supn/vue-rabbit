import httpInstance from "@/utils/http";

//获取banner
export function getBannerAPI(params = {}) {
  //接口默认主页为1，分类为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

//获取新鲜好物
export const getNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

//获取人气好物

export const getHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};

/**
 * 获取所有商品模块
 */

export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
