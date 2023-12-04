//封装倒计时逻辑函数
import { computed, onUnmounted, ref } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
  let timer = null;
  //1.响应式的数据
  const time = ref(0);
  //格式化后的时间
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  //2.开启倒计时的函数
  const start = (currentTime) => {
    //开始倒计时的逻辑
    //核心逻辑的编写：每隔1s就减一
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
  //组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer);
  });
  return {
    formatTime,
    start,
  };
};
