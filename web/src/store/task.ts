import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import firebase from 'firebase/app';
import store from '@/store';
import {UserModule} from '@/store/user';

@Module({name: 'task', store, dynamic: true})
class Task extends VuexModule {
  tasks: TTask[] = [];
  task: TTask | null = null;

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

  @Mutation
  TASK_SAVED() {
    // Does nothing
  }

  @Mutation
  TASK_GET(task: TTask) {
    this.task = task;
  }

  @Mutation
  DEL_TASK(id: string) {
    const index = this.tasks.findIndex((t) => t.id === id);
    const tasks = [...this.tasks];
    tasks.splice(index, 1);
    this.tasks = tasks;
  }

  @Action({commit: 'TASK_SAVED'})
  async save(task: TTask) {
    const id = task.id;
    delete task.id;
    await firebase.firestore().collection(UserModule.user.uid).doc(id).update(task);
    task.id = id;
    return task;
  }

  @Action({commit: 'TASK_GET'})
  async getTask(id: string) {
    let task = this.tasks.find((t) => t.id === id);
    if (task) {
      return task;
    }
    const tasks = await this.fetchTasks();
    task = tasks.find((t) => t.id === id);
    if (task) {
      return task;
    }
    throw Error(`getTask: cannot find task ${id}`);
  }

  @Action({commit: 'DEL_TASK'})
  async del(id: string) {
    await firebase.firestore().collection(UserModule.user.uid).doc(id).delete();
    return id;
  }
}

export const TaskModule = getModule(Task);
