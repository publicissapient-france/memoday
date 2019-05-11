<template>
  <div class="submit-task">
    <task-input v-model="task"/>
    <v-btn flat icon color="deep-purple" @click="onClick">
      <v-icon>send</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import {VIcon, VBtn} from 'vuetify/lib';
  import {Prop} from 'vue-property-decorator';

  @Component({
    components: {
      VIcon,
      VBtn,
    },
  })
  export default class SubmitTask extends Vue {
    @Prop()
    onSubmit: any;

    task = '';

    onClick() {
      this.onSubmit(this.task);
      this.task = '';
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
  }

  .task-input {
    flex-grow: 1;
  }
</style>
