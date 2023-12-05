<script setup>
import { useUserStore } from "@/stores/userStore"
import { useRouter } from "vue-router";
const userStore = useUserStore()
const router=useRouter()
const confirm = () => {
  userStore.clearUserInfo()
  router.push('/login')
}

</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.token">
          <li><a><i class="iconfont icon-yonghu"></i>{{ userStore.userInfo.nickname }}</a></li>
          <li>
          <el-popconfirm 
          title="确认退出吗？" 
          confirm-button-text="确认" 
          cancel-button-text="取消"
          @confirm="confirm" >
            <template #reference>
              <a>退出登录</a>
            </template>
          </el-popconfirm>
          </li>
          <li><RouterLink to="/member/order">我的订单</RouterLink></li>
          <li><RouterLink to="/member">会员中心</RouterLink></li>
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

</style>@/stores/userStore