<template>
  <div>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
        <!-- 二级路由出口 -->
        <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>hhh
    <br><br><br><br><br>
    <RouterView />
    <LayoutFooter />

  

  </div>

</template>
<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue"
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue"
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue"
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue"
</script>
