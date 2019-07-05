<template>
  <section>
    <img src="./logo.png">
    <h1 class="is-size-1">Welcome to MemoDay</h1>
  </section>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component
  export default class Hero extends Vue {
  }
</script>

<style scoped lang="scss">
  section {
    text-align: center;
  }

  img {
    height: 100px;
    margin: 30px;
  }

  h1 {
    margin: 20px 20px 50px 20px;
  }
</style>
