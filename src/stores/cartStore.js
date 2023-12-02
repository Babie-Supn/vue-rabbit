//封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";

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

    //计算属性
    //1.总的数量 所有项的count之和
    const allCount = computed(() => {
      return cartList.value.reduce((i, c) => i + c.count, 0);
    });
    //2.总的价格 所有项的count * price
    const allPrice = computed(() => {
      return cartList.value.reduce((i, c) => i + c.count * c.price, 0);
    });
    //3.是否全选
    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected);
    });
    //已选择数量
    const selectedCount = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0);
    });
    //已选择总价
    const selectedPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0);
    });

    //切换单选功能
    const singleCheck = (skuId, selected) => {
      //通过skuId找到要修改的那一项
      const item = cartList.value.find((item) => skuId === item.skuId);
      item.selected = selected;
    };
    //全选功能
    const allCheck = (selected) => {
      //把cartList的每一项状态都变为selected
      cartList.value.forEach((item) => (item.selected = selected));
    };

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
    };
  },
  {
    persist: true,
  }
);
