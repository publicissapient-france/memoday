import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import store from '@/store';
import firebase from 'firebase';

@Module({name: 'user', store, dynamic: true})
class User extends VuexModule {
  user: firebase.User | { uid: string } = {
    uid: localStorage.getItem('uid') || '',
  };

  get isLogged() {
    return this.user.uid !== '';
  }

  @Action({commit: 'SET_USER'})
  setUser(user: firebase.User) {
    localStorage.setItem('uid', user.uid);
    return user;
  }

  @Mutation
  SET_USER(user: firebase.User) {
    this.user = user;
  }
}

export const UserModule = getModule(User);
