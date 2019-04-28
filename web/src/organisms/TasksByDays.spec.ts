import {shallowMount} from '@vue/test-utils';
import TasksByDays from '@/organisms/TasksByDays.vue';
import {parse} from 'date-fns';

describe('TasksByDays.vue', () => {
  it('should get task group by day from now', () => {
    const tasks = [
      {
        date: '2019-04-28T10:00:00.000+02:00',
      },
      {
        date: '2019-04-27T10:00:00.000+02:00',
      },
      {
        date: '2019-04-12T10:00:00.000+02:00',
      },
    ];
    const wrapper = shallowMount(TasksByDays, {
      propsData: {tasks, day: parse('2019-04-28T10:00:00.000+02:00')},
    });
    expect((wrapper.vm as any).tasksByDays).toEqual({
      0: [
        {
          date: '2019-04-28T10:00:00.000+02:00',
        },
      ],
      1: [
        {
          date: '2019-04-27T10:00:00.000+02:00',
        },
      ],
      16: [
        {
          date: '2019-04-12T10:00:00.000+02:00',
        },
      ],
    });
  });
});
