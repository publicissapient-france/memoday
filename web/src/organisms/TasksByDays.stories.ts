import {storiesOf} from '@storybook/vue';
import TasksByDays from '@/organisms/TasksByDays';
import Vue from 'vue';
import {action} from '@storybook/addon-actions';

Vue.component('TasksByDays', TasksByDays);

const onTaskClick = (id: string) => {
  action('onTaskClick')(id);
};

storiesOf('Organisms | TasksByDays', module)
  .add('with one task per day', () => ({
    data() {
      return {
        tasks: [
          {
            name: 'Tasks component created',
            id: 'az',
            date: '2019-04-28T16:14:00.000+02:00',
          },
          {
            name: 'Storybook for tasks component created',
            id: 'ae',
            date: '2019-04-27T16:14:00.000+02:00',
          },
          {
            name: 'Vuetify on Memoday',
            id: 'ar',
            date: '2019-04-26T16:14:00.000+02:00',
          },
        ],
        onTaskClick,
      };
    },
    template: `<tasks-by-days
                  :tasks="tasks"
                  :day="new Date('Sun Apr 28 2019 15:00:00 GMT+0200')"
                  :onTaskClick="onTaskClick"/>`,
  }))
  .add('with many task for today', () => ({
    data() {
      return {
        tasks: [
          {
            name: 'Tasks component created',
            id: 'az',
            date: '2019-04-28T16:14:00.000+02:00',
          },
          {
            name: 'Storybook for tasks component created',
            id: 'ae',
            date: '2019-04-28T16:14:00.000+02:00',
          },
          {
            name: 'Vuetify on Memoday',
            id: 'ar',
            date: '2019-04-28T16:14:00.000+02:00',
          },
        ],
        onTaskClick,
      };
    },
    template: `<tasks-by-days
                  :tasks="tasks"
                  :day="new Date('Sun Apr 28 2019 15:00:00 GMT+0200')"
                  :onTaskClick="onTaskClick"></tasks-by-days>`,
  }));
