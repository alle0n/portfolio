import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';
import * as contentful from 'contentful';


import App from './App.vue'
import router from './core/router'

import {
  applyPolyfills,
  defineCustomElements,
} from '@alle0n/portfolio-components/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

const $cxt = contentful.createClient({
  space: 'h7gb6lhfnhiu',
  accessToken: '3wkm1rP4KtUtB8T6SOTpQC8lgiJUjawHARdGF_FAfBU'
})

app.provide('$axios', axios)
app.provide('$cxt', $cxt)

app.mount('#app')
