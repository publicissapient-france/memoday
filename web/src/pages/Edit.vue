<template>
  <edit-template v-if="task" :task="task" :loading="loading" :actions="actions"></edit-template>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import EditTemplate from '@/templates/EditTemplate.vue';
  import { TaskModule } from '@/store/task';
  import router from '@/router';

  @Component({
    components: {
      EditTemplate,
    },
  })
  export default class Edit extends Vue {

    get task() {
      return TaskModule.task;
    }

    loading = {
      save: false,
      del: false,
    };

    actions = {
      save: async (task: TTask) => {
        this.loading.save = true;
        try {
          await TaskModule.save(task);
          this.loading.save = false;
          router.replace('/');
        } catch (ignored) {
          this.loading.save = false;
        }
      },
      cancel: () => {
        router.replace('/');
      },
      del: async () => {
        this.loading.del = true;
        try {
          if (this.task) {
            await TaskModule.del(this.task.id);
            router.replace('/');
          }
          this.loading.del = false;
        } catch (ignored) {
          this.loading.del = false;
        }
      },
    };

    async mounted() {
      try {
        await TaskModule.getTask(this.$route.params.id);
      } catch (_) {
        this.actions.cancel();
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
