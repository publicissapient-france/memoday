import {storiesOf} from '@storybook/vue';
import Tasks from './Tasks.vue';
import Vue from 'vue';
import {action} from '@storybook/addon-actions';

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
        onTaskClick(id: string) {
          action('onTaskClick')(id);
        },
      };
    },
    template: `<tasks :tasks="tasks" :onTaskClick="onTaskClick"></tasks>`,
  }));
