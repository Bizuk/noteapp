import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyBNGWHJg0hPgebbGFSHIiKzjmjFC4aEJUY",
    authDomain: "note-app-f8e54.firebaseapp.com",
    databaseURL: "https://note-app-f8e54.firebaseio.com",
    projectId: "note-app-f8e54",
    storageBucket: "note-app-f8e54.appspot.com",
    messagingSenderId: "25613375871",
    appId: "1:25613375871:web:c343866948bf651eaae24a",
    measurementId: "G-PLJFGQJ3EB"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
