import './main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createI18n } from "vue-i18n";
import messages from './locale/localeMsg'



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate);


const i18n = createI18n({
  locale: 'en', // set locale
  messages: messages, // set locale messages
});


app.use(i18n);
app.mount('#app')
