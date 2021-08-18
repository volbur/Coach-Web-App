import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';

import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);
app.component('BaseCard', BaseCard);
app.component('BaseSpinner', BaseSpinner);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
