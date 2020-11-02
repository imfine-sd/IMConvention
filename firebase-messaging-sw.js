// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyBtnFzSNMp30pWM2CNva-U9ZM1sdE8lzts",
    authDomain: "fir-ca8ad.firebaseapp.com",
    databaseURL: "https://fir-ca8ad.firebaseio.com",
    projectId: "fir-ca8ad",
    storageBucket: "fir-ca8ad.appspot.com",
    messagingSenderId: '371247898053',
    appId: "1:371247898053:web:a657c9fb4898a89947bfac",
    measurementId: "G-BWCDY22QJR"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// firebase.messaging();
// const messaging = firebase.messaging();
// messaging.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     // ...
//   });
// console.log("MM", messaging)

try {
    if (firebase.messaging.isSupported()) {
        const messaging = firebase.messaging();
        console.log("@@", messaging)
        messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
            // ...
        });
    }
} catch (e) { }