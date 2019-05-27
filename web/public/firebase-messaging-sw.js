importScripts('https://www.gstatic.com/firebasejs/5.9.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.3/firebase-messaging.js');

// noinspection ES6ModulesDependencies
firebase.initializeApp({
  'messagingSenderId': '298272960522',
});

// noinspection ES6ModulesDependencies
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
