import httpInstance from "@/utils/http";

//获取banner
export function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
  });
}

//获取新鲜好物
export const getNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};
