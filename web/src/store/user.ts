import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import firebase from 'firebase/app';
import ky from 'ky';

@Module({ name: 'user', store, dynamic: true })
class User extends VuexModule {
  user: TUser = {
    uid: localStorage.getItem('uid') || '',
    notificationPermissionAsked: !!localStorage.getItem('notificationPermissionAsked'),
  };

  get isLogged() {
    return this.user.uid !== '';
  }

  get isNotificationPermissionAsked() {
    return this.user.notificationPermissionAsked;
  }

  @Action({ commit: 'SET_USER' })
  setUser(user: firebase.User) {
    localStorage.setItem('uid', user.uid);
    return user;
  }

  @Action({ commit: 'TOKEN_UPDATED' })
  async saveToken(token: string) {
    await ky.post(process.env.VUE_APP_SUBSCRIBE_TO_TOPIC, {
      json: {
        registration_token: token,
        topic_name: 'reminder',
      },
    }).json();
    return token;
  }

  @Action({ commit: 'NOTIFICATION_ASKED' })
  notificationAsked() {
    localStorage.setItem('notificationPermissionAsked', 'y');
  }

  @Mutation
  SET_USER(user: firebase.User) {
    this.user = {
      ...this.user,
      uid: user.uid,
    };
  }

  @Mutation
  TOKEN_UPDATED() {
    // Does nothing
  }

  @Mutation
  NOTIFICATION_ASKED() {
    this.user = { ...this.user, notificationPermissionAsked: true };
  }
}

export const UserModule = getModule(User);
