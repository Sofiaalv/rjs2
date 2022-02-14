import  firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4ujaqhst8fuu1HJnzNgYABQKtWxgO4Eg",
    authDomain: "curso-reactjs-804f0.firebaseapp.com",
    projectId: "curso-reactjs-804f0",
    storageBucket: "curso-reactjs-804f0.appspot.com",
    messagingSenderId: "725171659871",
    appId: "1:725171659871:web:4693586f83ef6392eee7ea"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => {
    return firebase.firestore(app);
};