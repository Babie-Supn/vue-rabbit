//定义懒加载插件
import { useIntersectionObserver } from "@vueuse/core";
export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        //el:指令绑定的那个元素 我们这里的指令元素为img
        //binding： binding.value 指令等于号后面绑定的表达式的值 我们这里为图片的url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            //进入视口区域
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
