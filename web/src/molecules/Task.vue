<template>
  <div class="task">
    <span class="name"><slot></slot></span>
  </div>
</template>

<script>
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component
  export default class Task extends Vue {
  }
</script>

<style scoped>

</style>
