import { createApp } from "vue";
import { createPinia } from "pinia";

//引入全局组件插件
import { componentPlugin } from "./components";

//引入初始化样式
import "@/styles/common.scss";

import App from "./App.vue";
import router from "./router";

//引入懒加载指令插件
import { lazyPlugin } from "@/directives";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);

app.mount("#app");

//定义全局指令
