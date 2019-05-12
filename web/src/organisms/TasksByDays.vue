<template>
  <div class="tasks-by-days">
    <div v-if="tasks.length > 0">
      <div v-for="d in Object.keys(tasksByDays)" :key="d.key">
        <h2>{{getDayNameHeader(tasksByDays[d][0].date)}} <span>{{formatDay(tasksByDays[d][0].date)}}</span></h2>
        <tasks :tasks="tasksByDays[d]"></tasks>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {parse, isAfter, differenceInCalendarDays, isToday, isYesterday, getDay, format} from 'date-fns';
  import Tasks from '@/molecules/Tasks.vue';

  const DAY_OF_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  @Component({
    components: {
      Tasks,
    },
  })
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

    formatDay(day: Date) {
      return format(day, 'D MMM');
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    margin-top: 10px;
    margin-bottom: 15px;

    span {
      color: #ababab;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
    }
  }
</style>
