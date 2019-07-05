import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import NotificationPermissionTemplate from '@/templates/NotificationPermissionTemplate';
import { action } from '@storybook/addon-actions';

Vue.component('NotificationPermissionTemplate', NotificationPermissionTemplate);

const loading = {
  allow: false,
  disallow: false,
};

storiesOf('Template | NotificationPermission', module)
  .add('default', () => ({
    data() {
      return {
        loading,
        refuseNotification() {
          loading.disallow = true;
          setTimeout(() => {
            loading.disallow = false;
            action('refuseNotifications')();
          }, 2000);
        },
        askNotificationPermission() {
          loading.allow = true;
          setTimeout(() => {
            loading.allow = false;
            action('askNotificationPermission')();
          }, 2000);
        },
      };
    },
    template: `<notification-permission-template
                  :loading="loading"
                  :refuseNotification="refuseNotification"
                  :askNotificationPermission="askNotificationPermission"></notification-permission-template>`,
  }));
