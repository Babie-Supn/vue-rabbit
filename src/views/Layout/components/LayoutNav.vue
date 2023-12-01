<script setup>
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.token">
          <li><a><i></i>{{ userStore.userInfo.nickname }}</a></li>
          <li>
          <el-popconfirm title="确认退出吗？" confirm-button-text="确认" cancel-button-text="取消">
            <template #reference>
              <a href="javascript:;">退出登录</a>
            </template>
          </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>

        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.app-topnav{
  width: 100%;
  height: 65px;
  background-color: #ff7686df;
}
.container{
  
  right: 0px;
  height: 65px;

}
.container ul{
  float: right; 
  padding-top: 22.5px;
}
.container li{
  float: left;
}
.container a{
  color: $xtxColor;
  padding: 5px;
}
.container a:hover{
  color:  rgba(255, 255, 255, 0.912);
  padding: 5px;
}

</style>