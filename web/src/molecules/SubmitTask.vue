<template>
  <div class="submit-task">
    <task-input v-model="task"/>
    <b-button type="is-primary" icon-right="send" @click="onClick"/>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import {Prop} from 'vue-property-decorator';
  import TaskInput from '@/atoms/TaskInput.vue';

  @Component({
    components: {
      TaskInput,
    },
  })
  export default class SubmitTask extends Vue {
    @Prop()
    onSubmit: any;

    task = '';

    onClick() {
      if (this.task.trim().length > 0) {
        this.onSubmit(this.task);
        this.task = '';
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/colors";

  .submit-task {
    display: flex;
    align-items: center;
    border-top: 1px solid #f1f1f1;
    background-color: #fff;
    margin-right: 5px;
  }

  .task-input {
    flex-grow: 1;
  }
</style>
