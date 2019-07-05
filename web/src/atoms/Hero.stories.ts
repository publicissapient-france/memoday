import { storiesOf } from '@storybook/vue';
import Hero from './Hero.vue';
import Vue from 'vue';

Vue.component('Hero', Hero);

storiesOf('Atoms | Hero', module)
  .add('default', () => '<hero></hero>');
