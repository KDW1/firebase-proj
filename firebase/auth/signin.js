import { firebase } from '../config';
import {getAuth, signInUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function signIn(email, password) {
    let result, error = null;
    try {
        result = signInUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
}