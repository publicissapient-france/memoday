<template>
  <ul>
    <task v-for="t in tasks" :key="t.id">{{t.name}}</task>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Task from '@/atoms/Task.vue';

  @Component({
    components: {
      Task,
    },
  })
  export default class Tasks extends Vue {
    @Prop()
    tasks: Task[];
  }
</script>

<style scoped lang="scss">
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .task {
    border-bottom: solid 1px;
    border-color: #f1f1f1;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }
</style>
