import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui';

const naive = create({
  components: [NButton]
});

const app = createApp(App);

// Use the store in the Vue app
app.use(store);

// Use the router in the Vue app
app.use(router);

// Use Naive UI
app.use(naive);

// Mount the app to the element with id 'app'
app.mount('#app');
