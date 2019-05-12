import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import 'firebase/firestore';
import firebase from 'firebase/app';
import store from '@/store';
import {UserModule} from '@/store/user';

@Module({name: 'task', store, dynamic: true})
class Task extends VuexModule {
  tasks: any[] = [];

  @Action({commit: 'ADD_TASK'})
  async submitTask(task: string) {
    const data = {
      name: task,
      date: new Date(),
    };
    if (UserModule.user) {
      const doc = await firebase.firestore().collection(UserModule.user.uid).add(data);
      return {
        ...data,
        id: doc.id,
      };
    }
    throw Error('submitTask: user is not logged');
  }

  @Action({commit: 'TASKS_FETCHED'})
  async fetchTasks() {
    if (UserModule.user) {
      const querySnapshot = await firebase.firestore().collection(UserModule.user.uid).get();
      const tasks: any[] = [];
      querySnapshot.forEach((doc) => {
        tasks.push({
          ...doc.data(),
          date: doc.data().date.toDate(),
          id: doc.id,
        });
      });
      return tasks;
    }
    throw Error('fetchTasks: user is not logged');
  }

  @Mutation
  ADD_TASK(task: any) {
    this.tasks = [task, ...this.tasks];
  }

  @Mutation
  TASKS_FETCHED(tasks: any[]) {
    this.tasks = [...tasks];
  }
}

export const TaskModule = getModule(Task);
