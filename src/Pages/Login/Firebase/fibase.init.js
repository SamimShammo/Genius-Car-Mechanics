import { initializeApp } from "firebase/app";
import firebaseConfig from "./firevase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;