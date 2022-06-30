import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdlnh8DboOB-k32yYxw_AvOrRkfGNRrhc",
  authDomain: "nike-life.firebaseapp.com",
  projectId: "nike-life",
  storageBucket: "nike-life.appspot.com",
  messagingSenderId: "709586595770",
  appId: "1:709586595770:web:72ab456dedcb21dbdab783",
  measurementId: "G-N7ZLFE84G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const GetFirestoreApp = () => {
  return app
}

// Get data by ID

const getItemsById = async (id)=> {
  const docRef = doc(collection(db, "products"), id)
  const docSnap = await getDoc(docRef)

  return docSnap.data()
}

// Get  id to be used in purchase order

const addOrder = async (order) => {
  const docSnap = await addDoc(collection(db, "orders"), order)
  return docSnap.id
}

export {
  db,
  getItemsById,
  addOrder
}


