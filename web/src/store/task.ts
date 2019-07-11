import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import firebase from 'firebase/app';
import store from '@/store';
import { UserModule } from '@/store/user';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

function mapDateAndId(querySnapshot: QuerySnapshot, tasks: any[]) {
  querySnapshot.forEach((doc) => {
    tasks.push({
      ...doc.data(),
      date: doc.data().date.toDate(),
      id: doc.id,
    });
  });
}

@Module({ name: 'task', store, dynamic: true })
class Task extends VuexModule {
  mTasks: TTask[] | null = null;
  mTask: TTask | null = null;

  get tasks() {
    return this.mTasks;
  }

  get task() {
    return this.mTask;
  }

  @Action({ commit: 'ADD_TASK' })
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

  @Action({ commit: 'TASKS_FETCHED' })
  async fetchTasksFromNetwork() {
    const tasks: any[] = [];
    if (UserModule.user) {
      const querySnapshot = await firebase.firestore().collection(UserModule.user.uid).get();
      mapDateAndId(querySnapshot, tasks);
    }
    return tasks;
  }

  @Mutation
  ADD_TASK(task: any) {
    this.mTasks = this.mTasks ? [task, ...this.mTasks] : [task];
  }

  @Mutation
  TASKS_FETCHED(tasks: any[]) {
    this.mTasks = [...tasks];
  }

  @Mutation
  TASK_SAVED() {
    // Does nothing
  }

  @Mutation
  TASK_GET(task: TTask) {
    this.mTask = task;
  }

  @Mutation
  DEL_TASK(id: string) {
    if (this.mTasks) {
      const index = this.mTasks.findIndex((t) => t.id === id);
      const tasks = [...this.mTasks];
      tasks.splice(index, 1);
      this.mTasks = tasks;
    }
  }

  @Action({ commit: 'TASK_SAVED' })
  async save(task: TTask) {
    const id = task.id;
    delete task.id;
    await firebase.firestore().collection(UserModule.user.uid).doc(id).update(task);
    task.id = id;
    return task;
  }

  @Action({ commit: 'TASK_GET' })
  async getTask(id: string) {
    let task = this.mTasks ? this.mTasks.find((t) => t.id === id) : null;
    if (task) {
      return task;
    }
    const tasks = await this.fetchTasksFromNetwork();
    task = tasks.find((t) => t.id === id);
    if (task) {
      return task;
    }
    throw Error(`getTask: cannot find task ${id}`);
  }

  @Action({ commit: 'DEL_TASK' })
  async del(id: string) {
    await firebase.firestore().collection(UserModule.user.uid).doc(id).delete();
    return id;
  }
}

export const TaskModule = getModule(Task);
