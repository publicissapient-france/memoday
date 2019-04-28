<template>
  <div>
    <div v-for="d in Object.keys(tasksByDays)" :key="d.key">
      <h2>{{getDayNameHeader(tasksByDays[d][0].date)}}</h2>
      <tasks :tasks="tasksByDays[d]"></tasks>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {parse, isAfter, differenceInCalendarDays, isToday, isYesterday, getDay} from 'date-fns';

  const DAY_OF_WEEK = [
    null, // Days in Date begin at 1
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  @Component
  export default class TasksByDays extends Vue {
    @Prop()
    tasks: Task[];

    @Prop({default: () => new Date()})
    day: Date;

    get tasksByDays() {
      const dateTasks = this.tasks.map((t) => {
        t.date = parse(t.date);
        return t;
      });
      const sortedTasks = dateTasks.sort((a, b) => isAfter(a.date, b.date) ? -1 : 1);
      return sortedTasks.reduce((a, b) => {
        const diffInDays = differenceInCalendarDays(this.day, b.date);
        const entry = a[diffInDays];
        if (typeof entry === 'undefined') {
          a[diffInDays] = [b];
        } else {
          entry.push(b);
        }
        return a;
      }, ({} as Record<string, Task[]>));
    }

    getDayNameHeader(day: Date) {
      if (isToday(day)) {
        return 'Today';
      }
      if (isYesterday(day)) {
        return 'Yesterday';
      }
      return DAY_OF_WEEK[getDay(day)];
    }
  }
</script>

<style scoped>

</style>
