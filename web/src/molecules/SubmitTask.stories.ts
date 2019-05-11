import {storiesOf} from '@storybook/vue';
import SubmitTask from './SubmitTask.vue';
import {action} from '@storybook/addon-actions';

storiesOf('Molecules | SubmitTask', module)
  .add('with a button', () => ({
    components: {SubmitTask},
    data() {
      return {
        onSubmit(task: string) {
          action('onSubmit')(task);
        },
      };
    },
    template: `<submit-task :onSubmit="onSubmit"/>`,
  }));
