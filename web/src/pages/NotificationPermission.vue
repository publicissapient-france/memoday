<template>
  <notification-permission-template
    :loading="loading"
    :askNotificationPermission="askNotificationPermission"
    :refuseNotification="refuseNotification"></notification-permission-template>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import messaging from '@/messaging';
  import NotificationPermissionTemplate from '@/templates/NotificationPermissionTemplate.vue';
  import router from '@/router';
  import { UserModule } from '@/store/user';

  @Component({
    components: {
      NotificationPermissionTemplate,
    },
  })
  export default class NotificationPermission extends Vue {
    loading = {
      allow: false,
      disallow: false,
    };

    async askNotificationPermission() {
      this.loading.allow = true;
      const allowed = await messaging.requestPermission();
      if (!allowed) {
        await UserModule.notificationAsked();
      }
      this.loading.allow = false;
      router.replace('/');
    }

    async refuseNotification() {
      this.loading.disallow = true;
      await UserModule.notificationAsked();
      this.loading.disallow = false;
      router.replace('/');
    }

    mounted() {
      UserModule.notificationAsked();
    }
  }
</script>

<style scoped lang="scss">

</style>
