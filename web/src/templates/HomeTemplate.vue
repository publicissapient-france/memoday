<template>
  <div class="home">
    <div v-if="data" class="home-with-data">
      <tasks-by-days :day="data.day"
                     :loading="data.loading"
                     :onTaskClick="actions.onTaskClick"
                     :tasks="data.tasks"></tasks-by-days>
      <submit-task :onSubmit="actions.submitTask"></submit-task>
    </div>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import TasksByDays from '@/organisms/TasksByDays.vue';
  import { Prop } from 'vue-property-decorator';
  import SubmitTask from '@/molecules/SubmitTask.vue';

  @Component({
    components: {
      SubmitTask,
      TasksByDays,
    },
  })
  export default class HomeTemplate extends Vue {
    @Prop()
    data: any;

    @Prop()
    actions: any;
  }
</script>

<style scoped lang="scss">
  .tasks-by-days {
    padding: 10px 0 50px 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-height: 93%;
    overflow: scroll;
  }

  .submit-task {
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
