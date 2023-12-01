//封装购物车模块

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    //1.定义state - cartList
    const cartList = ref([]);
    //2.定义action - addCart
    const addCart = (goods) => {
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      //添加购物车操作
      //已添加过 - count+=count
      if (item) {
        item.count += goods.count;
      }
      //未添加过 - 直接push
      else {
        //没找到push
        cartList.value.push(goods);
      }
      //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，能则是添加过
    };
    const delCart = (skuId) => {
      //删除购物车
      //思路：1.找到要删除项的下标值 -splice 2.使用数组的过滤器 -filter
      const index = cartList.value.findIndex((item) => skuId === item.skuId);
      cartList.value.splice(index, 1);
    };

    return {
      cartList,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  }
);
