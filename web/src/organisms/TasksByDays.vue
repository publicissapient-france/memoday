<template>
  <div class="tasks-by-days">
    <div v-if="tasks && tasks.length > 0">
      <div v-for="d in Object.keys(tasksByDays)" :key="d.key">
        <h2>{{getDayNameHeader(tasksByDays[d][0].date)}} <span>{{formatDay(tasksByDays[d][0].date)}}</span></h2>
        <tasks :tasks="tasksByDays[d]" :onTaskClick="onTaskClick"></tasks>
      </div>
    </div>
    <div v-else-if="loading">
      <tasks-loading></tasks-loading>
    </div>
    <hint-add-achievement v-else></hint-add-achievement>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';
  import { differenceInCalendarDays, format, getDay, isAfter, isToday, isYesterday, parse } from 'date-fns';
  import Tasks from '@/molecules/Tasks.vue';
  import Hero from '@/atoms/Hero.vue';
  import HintAddAchievement from '@/molecules/HintAddAchievement.vue';
  import TasksLoading from '@/molecules/TasksLoading.vue';

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
      TasksLoading,
      HintAddAchievement,
      Tasks,
      Hero,
    },
  })
  export default class TasksByDays extends Vue {
    @Prop()
    tasks: TTask[];

    @Prop()
    onTaskClick: (id: string) => void;

    @Prop({ default: () => new Date() })
    day: Date;

    @Prop()
    loading: boolean;

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
      }, ({} as Record<string, TTask[]>));
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

</style>
