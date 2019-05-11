import {storiesOf} from '@storybook/vue';
import Vue from 'vue';
import TaskInput from './TaskInput.vue';

Vue.component('TaskInput', TaskInput);

storiesOf('Atoms | TaskInput', module)
  .add('with many lines', () => ({
    data() {
      return {};
    },
    template: `<task-input/>`,
  }));
