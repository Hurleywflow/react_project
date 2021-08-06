import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC-oy63OEjXon8VX3KGgPGJ2uZb_u7zhHE',
	authDomain: 'hurley-firebase-images.firebaseapp.com',
	projectId: 'hurley-firebase-images',
	storageBucket: 'hurley-firebase-images.appspot.com',
	messagingSenderId: '331035779691',
	appId: '1:331035779691:web:7cc11bd29090d3b9d5c72e',
	measurementId: 'G-SPSHZ3X87G',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
export { projectStorage, projectFirestore };
