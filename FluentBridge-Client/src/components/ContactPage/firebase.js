import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyA81CtdT23MTH6JLVQdnIJnHLYB8mFxEjY",
    authDomain: "contact-us-form-e6199.firebaseapp.com",
    databaseURL: "https://contact-us-form-e6199-default-rtdb.firebaseio.com",
    projectId: "contact-us-form-e6199",
    storageBucket: "contact-us-form-e6199.appspot.com",
    messagingSenderId: "581333308087",
    appId: "1:581333308087:web:8f9b6af3a655b99cd37332"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();