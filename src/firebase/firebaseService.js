import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzplyeCw0lqtaAFocCxhhH__-uefHyGQQ",
  authDomain: "flutter-test-project-58f59.firebaseapp.com",
  databaseURL: "https://flutter-test-project-58f59-default-rtdb.firebaseio.com",
  projectId: "flutter-test-project-58f59",
  storageBucket: "flutter-test-project-58f59.appspot.com",
  messagingSenderId: "402872740988",
  appId: "1:402872740988:web:0b9dda3cfcd1e2368eedf9",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// const getDocument = async (docId = "nbP2rCt1r6cT08bGWKt6vH3DTdr2") => {
//   try {
//     const docRef = doc(db, studentsDb, docId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists) {
//       console.log("data ******************************8");
//       console.log(docSnap.data());
//     }
//   } catch (err) {
//     console.log("error ******************************8");

//     console.log(err);
//   }
// };

export const createDocument = async (data, collectionName) => {
  try {

    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, data);
  } catch (err) {
    console.log('error 901: create doc err')
    throw err;
  }
};

export const getAllDocuments = async (collectionName) => {
  try {
    const ref = collection(db, collectionName);
    const snapshot = await getDocs(ref);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (err) {
    console.log("error 902: get all documents");
    console.log(err);
  }
};

export const updateDocument = async (newData, docId, collection) => {
  try {
    const docRef = doc(db, collection, docId);
    await updateDoc(docRef, newData);
  } catch (err) {
    console.log("error 903: update doc error ");
    console.log(err);
  }
};

export const deleteDocument = async (docId, collection) => {
  try {
    const docRef = doc(db, collection, docId);
    await deleteDoc(docRef);
  } catch (err) {
    console.log("error 904: delete doc error ");
    console.log(err);
  }
};

// export default { getAllDocuments };
