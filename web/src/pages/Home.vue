<template>
  <div>
    <home-template :data="d" :actions="actions"/>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import HomeTemplate from '@/templates/HomeTemplate.vue';
  import {TaskModule} from '@/store/task';
  import router from '@/router';

  @Component({
    components: {
      HomeTemplate,
    },
  })
  export default class Home extends Vue {

    get d() {
      return {
        tasks: TaskModule.tasks,
      };
    }

    actions = {
      submitTask: async (task: string) => {
        return await TaskModule.submitTask(task);
      },
      onTaskClick: (id: string) => {
        router.push(`edit/${id}`);
      },
    };

    async mounted() {
      TaskModule.fetchTasks();
    }
  }
</script>
