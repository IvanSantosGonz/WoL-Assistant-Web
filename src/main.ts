import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "@/i18n/en.json";

const i18n = createI18n({
   locale: "en",
   messages: {
      en
   }
});

createApp(App)
   .use(router)
   .use(i18n)
   .mount("#app");
