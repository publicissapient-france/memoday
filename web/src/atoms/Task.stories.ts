import {storiesOf} from '@storybook/vue';
import Task from './Task.vue';
import Vue from 'vue';

Vue.component('Task', Task);

storiesOf('Atoms | TTask', module)
  .add('with name', () => '<task>Task created</task>')
  .add('with emoji', () => '<task>Task created 🚀</task>');
