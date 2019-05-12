import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import {UserModule} from '@/store/user';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

class Auth {
  public context: any;
  public uiConfig!: firebaseui.auth.Config;
  public ui!: firebaseui.auth.AuthUI;

  public init(context: any) {
    this.context = context;

    this.uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    };

    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        UserModule.setUser(user);
      }
    });
  }

  public authForm(container: any) {
    this.ui.start(container, this.uiConfig);
  }
}

export default new Auth();
