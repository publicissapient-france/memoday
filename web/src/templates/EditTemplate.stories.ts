import {storiesOf} from '@storybook/vue';
import Vue from 'vue';
import EditTemplate from '@/templates/EditTemplate';
import Task from '@/memoday';
import {action} from '@storybook/addon-actions';

Vue.component('EditTemplate', EditTemplate);

const task = {
  name: 'Tasks component created',
  id: 'a',
  date: new Date(),
};

const loading = {
  save: false,
  del: false,
};

storiesOf('Template | Edit', module)
  .add('with a task', () => ({
    data() {
      return {
        task,
        loading,
        actions: {
          save(t: Task) {
            loading.save = true;
            setTimeout(() => {
              action('save')(t);
              loading.save = false;
            }, 3000);
          },
          cancel() {
            action('back')();
          },
          del(t: Task) {
            loading.del = true;
            setTimeout(() => {
              action('delete')(t);
              loading.del = false;
            }, 3000);
          },
        },
      };
    },
    template: `<edit-template :task="task" :loading="loading" :actions="actions"></edit-template>`,
  }));
