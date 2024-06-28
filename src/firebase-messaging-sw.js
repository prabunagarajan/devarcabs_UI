importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
  firebase.initializeApp({
    apiKey: "AIzaSyASdB5yCYDcukbtX7rnmpl22KMcYVbOWcE",
    authDomain: "up-excise-test.firebaseapp.com",
    projectId: "up-excise-test",
    storageBucket: "up-excise-test.appspot.com",
    messagingSenderId: "674441976789",
    appId: "1:674441976789:web:138e42e76ee2bbcbb37b5c",
    measurementId: "G-539DPQM7CG"
});
const messaging = firebase.messaging();

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});