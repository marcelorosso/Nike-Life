/**
 * Nike-Life - Script para limpiar productos viejos de Firestore
 *
 * Borra todos los productos que NO sean los 16 del seed (id 1-16).
 * Los productos viejos de sneaks-api tienen ids como 394710, etc.
 *
 * Uso:
 *   cd Nike-Life
 *   node scripts/cleanFirestore.js
 */

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, deleteDoc, doc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAdlnh8DboOB-k32yYxw_AvOrRkfGNRrhc",
  authDomain: "nike-life.firebaseapp.com",
  projectId: "nike-life",
  storageBucket: "nike-life.appspot.com",
  messagingSenderId: "709586595770",
  appId: "1:709586595770:web:72ab456dedcb21dbdab783",
  measurementId: "G-N7ZLFE84G2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// IDs validos (los 16 productos del seed)
const VALID_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

async function cleanProducts() {
  console.log("=== Nike-Life Firestore Cleanup ===\n");

  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  let deleted = 0;
  let kept = 0;

  for (const docSnap of snapshot.docs) {
    const data = docSnap.data();
    const productId = data.id;

    if (VALID_IDS.includes(productId)) {
      console.log(`  KEEP:   "${data.name}" (id=${productId})`);
      kept++;
    } else {
      await deleteDoc(doc(db, "products", docSnap.id));
      console.log(`  DELETE: "${data.name}" (id=${productId})`);
      deleted++;
    }
  }

  console.log(`\n=== Resultado: ${kept} conservados, ${deleted} eliminados ===`);
  console.log("\nListo! Solo quedan los 16 productos del seed.");
  process.exit(0);
}

cleanProducts();
