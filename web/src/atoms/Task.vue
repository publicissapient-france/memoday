<template>
  <div class="task">
    <b-icon type="is-info" icon="checkbox-marked-circle" size="is-small"></b-icon>
    <span class="name"><slot></slot></span>
  </div>
</template>

<script>
  import Component from 'vue-class-component/lib/index';
  import Vue from 'vue';

  @Component
  export default class Task extends Vue {
  }
</script>

<style scoped>
  .task {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }

  .name {
    margin-left: 5px;
  }
</style>
