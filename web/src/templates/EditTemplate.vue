<template>
  <section class="edit-template">
    <div class="form">
      <b-field label="Task">
        <b-input v-model="task.name"></b-input>
      </b-field>
      <b-field label="When?">
        <b-datepicker placeholder="Click to select..." icon="calendar-today" v-model="task.date"
                      @input="onDateChange"></b-datepicker>
      </b-field>
    </div>
    <div class="buttons">
      <b-button v-if="!loading.save"
                type="is-primary"
                icon-left="content-save"
                @click="() => actions.save(task)">
        Save
      </b-button>
      <b-button v-if="loading.save" loading>Loading</b-button>

      <b-button type="is-info" icon-left="undo" outlined @click="actions.cancel">Cancel</b-button>

      <b-button type="is-danger"
                v-if="!loading.del"
                outlined
                icon-left="delete"
                @click="() => actions.del(task)">
        Delete
      </b-button>
      <b-button type="is-danger" v-if="loading.del" loading>Loading</b-button>
    </div>
  </section>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import {Prop} from 'vue-property-decorator';

  @Component
  export default class EditTemplate extends Vue {
    @Prop()
    task: TTask;

    @Prop()
    loading: { save: boolean, del: boolean };

    @Prop()
    actions: any;

    onDateChange(date: Date) {
      this.task.date = date;
    }
  }
</script>

<style scoped lang="scss">
  .edit-template {
    margin: 10px;
  }

  .buttons {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>
