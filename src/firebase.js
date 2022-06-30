import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVhuMY4Iuy2BUehQbzAsOZDHHYZhYflVM",
  authDomain: "aquiestoy-6417f.firebaseapp.com",
  databaseURL: "https://aquiestoy-6417f-default-rtdb.firebaseio.com",
  projectId: "aquiestoy-6417f",
  storageBucket: "aquiestoy-6417f.appspot.com",
  messagingSenderId: "325319980422",
  appId: "1:325319980422:web:756334154bf9e7272ba807"
};
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

  setPersistence(auth, browserLocalPersistence);
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
//   const auth = getAuth(app)
// // Get a list  of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }