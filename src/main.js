import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
//引入初始化样式
import "@/styles/common.scss";

//测试接口函数
import { getCategory } from "@/apis/testAPI";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

getCategory().then((res) => {
  console.log(res);
});

app.use(createPinia());
app.use(router);

app.mount("#app");
