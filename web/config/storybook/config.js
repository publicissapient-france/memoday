import "@/plugins/vuetify";
import '@/assets/style.scss';
import Vue from 'vue';
import {addDecorator, configure} from '@storybook/vue';
import {VApp} from 'vuetify/lib';

Vue.component('VApp', VApp);

addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}));

const req = require.context('../../src', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
