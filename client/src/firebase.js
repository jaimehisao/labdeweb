import { initializeApp } from "firebase/app"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyB2edKftdPRnSsjxa5gm41TpZ534J0H_R0",

  authDomain: "codekraft-99ae4.firebaseapp.com",

  projectId: "codekraft-99ae4",

  storageBucket: "codekraft-99ae4.appspot.com",

  messagingSenderId: "869143590780",

  appId: "1:869143590780:web:996b4376437273494296f9"

};

export const app = initializeApp(firebaseConfig)
export const storage  = getStorage()