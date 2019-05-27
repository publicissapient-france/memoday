import 'firebase/messaging';
import firebase from 'firebase/app';
import { UserModule } from '@/store/user';

class Messaging {
  messaging = firebase.messaging();

  constructor() {
    this.messaging.usePublicVapidKey(process.env.VUE_APP_FIREBASE_MESSAGING_KEY);
  }

  init() {
    this.messaging.onTokenRefresh(async () => {
      await this.getToken();
    });
  }

  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        await this.getToken();
        return true;
      }
    } catch (ignore) {
      return false;
    }
    return false;
  }

  async getToken() {
    try {
      const token = await this.messaging.getToken();
      if (token) {
        UserModule.saveToken(token);
      } else {
        this.requestPermission();
      }
    } catch (ignore) {
      // Does nothing
    }
  }
}

export default new Messaging();
