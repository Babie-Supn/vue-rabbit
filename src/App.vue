<script setup>

</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
  <div class="test">
    test textColor
  </div>
</template>

<style scoped lang="scss">
.test{
  color: $xtxColor;
  background-color: #F3A1A9;
}
</style>
