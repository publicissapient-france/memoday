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
    };

    async mounted() {
      TaskModule.fetchTasks();
    }
  }
</script>
