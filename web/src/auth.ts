import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import { UserModule } from '@/store/user';

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
