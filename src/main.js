import Vue from 'vue'
import App from './App.vue'
import router from './router'

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import vuetify from './plugins/vuetify'

Sentry.init({
  Vue,
  dsn: "https://45459ec998cd45a39e63d6c05cdc4bd9@o1253294.ingest.sentry.io/6422455",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
