import firebase_app  from '../config';
import {getAuth, signInUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);

export default function signIn(email, password) {
    let result, error = null;
    try {
        result = signInUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
}