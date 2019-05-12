<template>
  <div class="task">
    <v-icon small>check_circle_outline</v-icon><span class="name"><slot></slot></span>
  </div>
</template>

<script>
  import Component from 'vue-class-component/lib/index';
  import {VIcon} from 'vuetify/lib';
  import Vue from 'vue';

  @Component({
    components: {
      VIcon,
    },
  })
  export default class Task extends Vue {
  }
</script>

<style scoped>
  .task {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .name {
    margin-left: 5px;
  }
</style>
