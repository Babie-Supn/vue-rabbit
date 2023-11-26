<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <!-- 测试面板组件 -->
  <HomePanel title="新鲜好物" sub-title="推荐">
    <div >
      我是新鲜好物的插槽内容
    </div>
  </HomePanel>
  <HomeHot />
  <HomeProduct />


</template>

<script setup>
import HomeBanner from "@/views/Home/components/HomeBanner.vue"
import HomeCategory from "@/views/Home/components/HomeCategory.vue"
import HomeHot from "@/views/Home/components/HomeHot.vue"
import HomeNew from "@/views/Home/components/HomeNew.vue"
import HomeProduct from "@/views/Home/components/HomeProduct.vue"
import HomePanel from "./components/HomePanel.vue"
</script>
