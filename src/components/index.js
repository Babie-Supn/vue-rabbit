//把components中的组件都进行全局化注册
//通过插件的方式
import ImageView from "@/components/imgView/index.vue";
import Sku from "@/components/XtxSku/index.vue";

export const componentPlugin = {
  install(app) {
    //app.component('组件名',组件配置对象)
    app.component("XtxSku", Sku);
    app.component("XtxImageView", ImageView);
  },
};
