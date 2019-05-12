<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
  import Vue from 'vue';
  import auth from '../auth';
  import Component from 'vue-class-component';

  @Component
  export default class Login extends Vue {
    mounted() {
      auth.authForm('#firebaseui-auth-container');
    }
  }
</script>
