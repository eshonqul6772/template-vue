import './assets/main.scss';

import i18n from '@/core/utils/i18n';

import I18NextVue from 'i18next-vue';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { VueQueryPlugin } from '@tanstack/vue-query';

import uiComponents from './components/uiComponents';
import FocusTrap from 'primevue/focustrap';

import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

import Tooltip from 'primevue/tooltip';
import BadgeDirective from 'primevue/badgedirective';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import AnimateOnScroll from 'primevue/animateonscroll';

// global components
uiComponents.map((component) => app.component(component.name, component));

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('style class', StyleClass);
app.directive('focus trap', FocusTrap);
app.directive('animatronic', AnimateOnScroll);

const ENV = import.meta.env;

console.log('ENV', ENV);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      options: {
        cssLayer: {
          name: 'primevue',
          order: 'tailwind-base, primevue, tailwind-utilities',
        },
      },
    },
    unstyled: true,
  },
});
app.use(I18NextVue, { i18next: i18n });
app.use(ToastService);
app.use(ConfirmationService);
app.use(DialogService);

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

app.use(router);
app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true,
});

app.mount('#app');
