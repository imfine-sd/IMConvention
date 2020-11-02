// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'api-key',
    authDomain: 'fir-ca8ad.firebaseapp.com',
    databaseURL: 'https://fir-ca8ad.firebaseio.com',
    projectId: 'fir-ca8ad',
    storageBucket: 'fir-ca8ad.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();