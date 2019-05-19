<template>
  <div class="task-input">
    <textarea type="text"
              id="task-input"
              name="task-input"
              @input="$emit('input', $event.target.value)" :value="value"></textarea>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import {Prop} from 'vue-property-decorator';

  @Component
  export default class TaskInput extends Vue {
    @Prop()
    value: string;
  }
</script>

<style scoped lang="scss">
  .task-input {
    display: flex;
  }

  textarea {
    flex-grow: 1;
    border: none;
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
    word-break: break-word;
    resize: none;
    height: 50px;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }
</style>
