<template>
  <div class="task" @click="click">
    <b-icon type="is-info" icon="checkbox-marked-circle" size="is-small"></b-icon>
    <span class="name"><slot></slot></span>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component/lib/index';
  import Vue from 'vue';
  import {Prop} from 'vue-property-decorator';

  @Component
  export default class Task extends Vue {
    @Prop()
    click: () => void;
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
