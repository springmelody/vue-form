import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/inputs";
import "./assets/tailwind.css";
const app = createApp(App);
components.forEach((component) => app.component(component.name, component));
app.mount("#app");
