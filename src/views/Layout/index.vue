<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue"
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue"
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue"

//触发获取导航列表的action

import { useCategoryStore } from "@/stores/categoryStore"
import { onMounted } from "vue"
const categoryStore = useCategoryStore()

onMounted(() => 
  categoryStore.getCategory(),
)
</script>
<template>
  <div>
    <LayoutFixed />
    <LayoutNav/>
    <LayoutHeader/>
        <!-- 方案一： 二级路由出口 添加key 破坏复用机制 强制销毁重建-->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView />
    <LayoutFooter />
  </div>
</template>
<style scoped>
div{
  background:#fee7e796 ;
}
</style>

