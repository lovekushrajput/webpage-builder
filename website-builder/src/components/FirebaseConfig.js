import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2Iptc5y3nUjziIIKzTgN3JpEFZhMSreg",
    authDomain: "webpage-builder-db144.firebaseapp.com",
    projectId: "webpage-builder-db144",
    storageBucket: "webpage-builder-db144.appspot.com",
    messagingSenderId: "46776720368",
    appId: "1:46776720368:web:d5d2e5b39ae4994d13db35",
    measurementId: "G-N0WZF6L4W6"
};

// initialize firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }

