import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive("color", function (el, binding) {
  const colors = binding.value;
  let i = 0;
  setInterval(() => {
    el.style.color = colors[i++];
    if (i > colors.length - 1) {
      i = 0;
    }
  }, 800);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
