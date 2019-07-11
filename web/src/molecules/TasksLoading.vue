<template>
  <div class="tasks-loading">
    <hero></hero>
    <p>Achievements retrieval, please wait ⏳</p>
    <b-icon
      icon="cloud-download"
      size="is-large"
      type="is-primary">️
    </b-icon>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Hero from '@/atoms/Hero.vue';

  @Component({
    components: {
      Hero,
    },
  })
  export default class TasksLoading extends Vue {
  }
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: 10px;
    margin-bottom: 15px;

    span {
      color: #ababab;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
    }
  }

  p {
    margin: 20px 0 40px 0;
  }

  .tasks-loading {
    text-align: center;
  }
</style>
