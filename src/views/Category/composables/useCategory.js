//封装分类数据业务相关代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategoryData = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onBeforeRouteUpdate((to) => {
    getCategoryData(to.params.id);
  });
  onMounted(() => getCategoryData());
  return { categoryData };
}
