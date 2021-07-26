import firebase from 'firebase/app';
import '@firebase/firestore';

//se va a ejecutar en pages/about

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAJN-6KUS8Nn3DerufnIrXVl09iTmNeEK8",
        authDomain: "proyecto-ecommerce-coder-d7369.firebaseapp.com",
        projectId: "proyecto-ecommerce-coder-d7369",
        storageBucket: "proyecto-ecommerce-coder-d7369.appspot.com",
        messagingSenderId: "919052048528",
        appId: "1:919052048528:web:4af8a278d22900df79a015"
    }
)

export function getFirebase(){
    return app;
}

export function getFirestore(){

    return firebase.firestore(app);

}
