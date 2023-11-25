<template>
  <div>
    <!-- 二级路由出口 -->
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView />
    <LayoutFooter />

  

  </div>

</template>
<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue"
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue"
</script>
