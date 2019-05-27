<template>
  <section class="messaging-permission has-text-centered">
    <div class="body">
      <img src="./logo.png">
      <h1 class="is-size-1">Welcome to MemoDay</h1>
      <p>In order to provide a great experience MemoDay would like to send you notifications reminders twice a day to
        write down your
        achievements.</p>
      <p> Would you please allow notifications?</p>
    </div>
    <div class="buttons is-right">
      <b-button v-if="!loading.allow"
                type="is-primary"
                icon-left="bell"
                @click="askNotificationPermission">
        Allow!
      </b-button>
      <b-button v-if="loading.allow" type="is-primary" loading>Loading</b-button>
      <b-button v-if="!loading.disallow" type="is-info" icon-left="bell-off" outlined @click="refuseNotification">
        No thanks
      </b-button>
      <b-button v-if="loading.disallow" type="is-info" outlined loading>Loading</b-button>
    </div>
  </section>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class NotificationPermissionTemplate extends Vue {
    @Prop()
    loading: { allow: boolean, disallow: boolean };

    @Prop()
    askNotificationPermission: () => void;

    @Prop()
    refuseNotification: () => void;
  }
</script>

<style scoped lang="scss">
  img {
    height: 100px;
    margin: 30px;
  }

  h1 {
    margin: 20px 20px 50px 20px;
  }

  p {
    margin: 20px;
  }

  .body {
    margin-bottom: 120px;
  }

  .buttons {
    background-color: #fafafa;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 10px;
  }
</style>
