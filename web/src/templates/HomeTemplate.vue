<template>
  <div class="home">
    <div v-if="data" class="home-with-data">
      <tasks-by-days :tasks="data.tasks" :day="data.day"></tasks-by-days>
      <submit-task :onSubmit="submitTask"></submit-task>
    </div>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import TasksByDay from '@/organisms/TasksByDays.vue';
  import {Prop} from 'vue-property-decorator';
  import SubmitTask from '@/molecules/SubmitTask.vue';

  @Component({
    components: {
      SubmitTask,
      TasksByDay,
    },
  })
  export default class Home extends Vue {
    @Prop()
    data: any;

    @Prop()
    actions: any;

    submitTask(task: string) {
      const createdTask = this.actions.submitTask(task);
      this.data.tasks = [
        createdTask,
        ...this.data.tasks];
    }
  }
</script>

<style scoped lang="scss">
  .home-with-data {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .tasks-by-days {
    margin: 10px;
    flex-grow: 1;
  }
</style>
