import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyBX6D8Av2d3portBLU1gOiPwDKxLPGQkmE",
            authDomain: "joyline-3bbc0.firebaseapp.com",
            databaseURL: "https://joyline-3bbc0.firebaseio.com",
            projectId: "joyline-3bbc0",
            storageBucket: "joyline-3bbc0.appspot.com",
            messagingSenderId: "754878541083"
        });
    }

}

module.exports = Firebase;