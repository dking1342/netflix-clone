import { createApp } from 'vue';
import Home from './pages/Home.vue';
import './styles/index.sass';
import { createRouter, createWebHashHistory } from 'vue-router';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  IoGlobeOutline,
  IoGlobe,
  IoCloseOutline,
  CoWebpack,
  FcGlobe,
  BiCaretDownFill,
  CoChevronRight,
  CoPlus,
  PxPlus,
} from 'oh-vue-icons/icons';
import MediaCenter from './pages/MediaCenter.vue';
import App from './App.vue';

addIcons(
  IoGlobeOutline,
  IoCloseOutline,
  CoWebpack,
  FcGlobe,
  IoGlobe,
  BiCaretDownFill,
  CoChevronRight,
  CoPlus,
  PxPlus
);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/media-center',
    component: MediaCenter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);
app.mount('#app');
// createApp({}).use(router).component('v-icon', OhVueIcon).mount('#app');
