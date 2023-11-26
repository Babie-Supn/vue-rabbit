<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot />
  <HomeProduct />


</template>

<script setup>
import HomeBanner from "@/views/Home/components/HomeBanner.vue"
import HomeCategory from "@/views/Home/components/HomeCategory.vue"
import HomeHot from "@/views/Home/components/HomeHot.vue"
import HomeNew from "@/views/Home/components/HomeNew.vue"
import HomeProduct from "@/views/Home/components/HomeProduct.vue"
</script>
