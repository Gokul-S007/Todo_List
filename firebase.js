var firebaseConfig = {
    apiKey: "AIzaSyB2k_wt-prKA6Hn7rBpD9DkfmeK2tqTAZ8",
    authDomain: "todotest-f1575.firebaseapp.com",
    projectId: "todotest-f1575",
    storageBucket: "todotest-f1575.appspot.com",
    messagingSenderId: "47820150326",
    appId: "1:47820150326:web:df4ef974effd361f376a97",
    measurementId: "G-9GZQTPLJ0Y"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();