import {storiesOf} from '@storybook/vue';
import Tasks from './Tasks.vue';
import Vue from 'vue';

Vue.component('Tasks', Tasks);

const tasks = [
  {
    name: 'Tasks component created',
    id: 'az',
  },
  {
    name: 'Storybook for tasks component created',
    id: 'ae',
  },
];

storiesOf('Molecules | Tasks', module)
  .add('with one task', () => ({
    data() {
      return {
        tasks,
      };
    },
    template: `<tasks :tasks="tasks"></tasks>`,
  }));
