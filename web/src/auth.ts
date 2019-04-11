import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseui from 'firebaseui';

const config = {
    apiKey: 'AIzaSyDIOVyRWt6kMkXXDPoLlA6BCF1TawLjxvY',
    authDomain: 'memoday-e29ea.firebaseapp.com',
    databaseURL: 'https://memoday-e29ea.firebaseio.com',
    projectId: 'memoday-e29ea',
    storageBucket: 'memoday-e29ea.appspot.com',
    messagingSenderId: '298272960522',
};

class Auth {
    public context: any;
    public uiConfig: any;
    public ui: any;

    public init(context: any) {
        this.context = context;

        firebase.initializeApp(config);
        this.uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        };
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());

        firebase.auth().onAuthStateChanged((user) => {
            this.context.$store.dispatch('app/setCurrentUser', user);
        });
    }

    public authForm(container: any) {
        this.ui.start(container, this.uiConfig);
    }

    public user() {
        return this.context ? firebase.auth().currentUser : null;
    }

}

export default new Auth();
