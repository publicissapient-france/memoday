import {storiesOf} from '@storybook/vue';
import Vue from 'vue';
import HomeTemplate from '@/templates/HomeTemplate';

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
        },
        actions: {
          submitTask(task: string) {
            return {
              name: task,
              id: 'x',
              date: new Date('Sun Apr 28 2019 15:00:00 GMT+0200'),
            };
          },
        },
      };
    },
    template: `<home-template :data="data" :actions="actions"></home-template>`,
  }));
