import {storiesOf} from '@storybook/vue';
import Vue from 'vue';
import HomeTemplate from '@/templates/HomeTemplate';
import {action} from '@storybook/addon-actions';

Vue.component('HomeTemplate', HomeTemplate);

storiesOf('Template | Home', module)
  .add('with many tasks', () => ({
    data() {
      return {
        data: {
          day: new Date('Sun Apr 28 2019 15:00:00 GMT+0200'),
          tasks: [
            {
              name: 'Tasks component created',
              id: 'a',
              date: '2019-04-28T16:14:00.000+02:00',
            },
            {
              name: 'Tasks component created',
              id: 'b',
              date: '2019-04-28T16:14:00.000+02:00',
            },
            {
              name: 'Tasks component created',
              id: 'c',
              date: '2019-04-28T16:14:00.000+02:00',
            },
            {
              name: 'Tasks component created',
              id: 'd',
              date: '2019-04-28T16:14:00.000+02:00',
            },
            {
              name: 'Tasks component created',
              id: 'e',
              date: '2019-04-28T16:14:00.000+02:00',
            },
            {
              name: 'Tasks component created',
              id: 'f',
              date: '2019-04-28T16:14:00.000+02:00',
            },
            {
              name: 'Storybook for tasks component created',
              id: 'g',
              date: '2019-04-27T16:14:00.000+02:00',
            },
            {
              name: 'Vuetify on Memoday',
              id: 'h',
              date: '2019-04-26T16:14:00.000+02:00',
            },
            {
              name: 'Tasks component created',
              id: 'i',
              date: '2019-04-28T16:14:00.000+02:00',
            },
          ],
        },
        actions: {
          submitTask(task: string) {
            action('submitTask')(task);
          },
        },
      };
    },
    template: `<home-template :data="data" :actions="actions"></home-template>`,
  }));
