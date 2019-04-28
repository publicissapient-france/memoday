import {storiesOf} from '@storybook/vue';
import Tasks from '@/organisms/Tasks';
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

storiesOf('Organisms | Tasks', module)
  .add('with one task', () => ({
    data() {
      return {
        tasks,
      };
    },
    template: `<tasks :tasks="tasks"></tasks>`,
  }));
