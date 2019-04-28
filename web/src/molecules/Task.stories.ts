import {storiesOf} from '@storybook/vue';
import Task from '@/molecules/Task';
import Vue from 'vue';

Vue.component('Task', Task);

storiesOf('Molecules | Task', module)
  .add('with name', () => '<task>Task created</task>')
  .add('with emoji', () => '<task>Task created ✅</task>');
