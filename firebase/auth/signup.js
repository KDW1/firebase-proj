import firebase_app from '../config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);

export default function signUp(email, password) {
    let result, error = null;

    try {
        result = createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
        error = e;
    }

    return {result, error }
}