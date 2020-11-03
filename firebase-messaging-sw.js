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
    messagingSenderId: "371247898053",
    appId: "1:371247898053:web:6c4786de640f7d0f47bfac",
    measurementId: "G-1CF0K55L16"
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
        console.log("messaging @@", messaging)
        // messaging.onMessage((payload) => {
        //     console.log('Message received. ', payload);
        //     // ...
        // });

        // 백그라운드 상태에서 받은 알림 처리
        messaging.setBackgroundMessageHandler((payload) => {
            console.log('Message received. ', payload);
            // Customize notification here
            const title = 'Background Message Title'
            const options = {
                body: payload.data.message,
                icon: '/firebase-logo.png'
            }

            return self.registration.showNotification(title, options);
        });
    }
} catch (e) { }