import { createApp } from "vue";
import { createPinia } from "pinia";
//引入初始化样式
import "@/styles/common.scss";

import App from "./App.vue";
import router from "./router";
import { useIntersectionObserver } from "@vueuse/core";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

//定义全局指令

app.directive("img-lazy", {
  mounted(el, binding) {
    //el:指令绑定的那个元素 我们这里的指令元素为img
    //binding： binding.value 指令等于号后面绑定的表达式的值 我们这里为图片的url
    console.log(el, binding);
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        //进入视口区域
        el.src = binding.value;
      }
    });
  },
});
