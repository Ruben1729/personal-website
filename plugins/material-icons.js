import MdiVue from "mdi-vue/v3";
import * as MdiJS from "@mdi/js";

export default defineNuxtPlugin(NuxtApp => {
    NuxtApp.vueApp.use(MdiVue, {icons: MdiJS})
})