/**
 * Nike-Life - Script para actualizar imágenes en Firestore
 *
 * Reemplaza las imágenes genéricas de Unsplash con fotos que coinciden
 * con cada modelo de zapatilla.
 *
 * Uso:
 *   cd Nike-Life
 *   node scripts/updateImages.js
 *
 * IMPORTANTE: Las reglas de Firestore deben permitir escritura.
 */

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs, updateDoc, query, where, doc } = require("firebase/firestore");

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

// Nuevas imágenes que coinciden con cada modelo
const imageUpdates = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    grid_picture_url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Air Jordan 4 Retro 'Military Black'",
    grid_picture_url: "https://images.unsplash.com/photo-1768851342799-d55a6801713c?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1768851342799-d55a6801713c?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Bred'",
    grid_picture_url: "https://images.unsplash.com/photo-1577655197898-da78ff8bed68?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1577655197898-da78ff8bed68?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Air Jordan 3 Retro 'White Cement'",
    grid_picture_url: "https://images.unsplash.com/photo-1666031862761-8916fb06899a?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1666031862761-8916fb06899a?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Air Max 90 'Infrared'",
    grid_picture_url: "https://images.unsplash.com/photo-1592247034198-9dd62e0b7a9e?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1592247034198-9dd62e0b7a9e?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Air Max 1 'Anniversary Red'",
    grid_picture_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    name: "Air Max 97 'Silver Bullet'",
    grid_picture_url: "https://images.unsplash.com/photo-1509991956814-dde211b7a2e9?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1509991956814-dde211b7a2e9?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    name: "Air Max 270 'Black Anthracite'",
    grid_picture_url: "https://images.unsplash.com/photo-1537796387166-42657617b636?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1537796387166-42657617b636?w=800&h=600&fit=crop"
  },
  {
    id: 9,
    name: "Air Force 1 Low '07 'Triple White'",
    grid_picture_url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop"
  },
  {
    id: 10,
    name: "Air Force 1 Mid '07 'Black'",
    grid_picture_url: "https://images.unsplash.com/photo-1629097499121-290fd9a95dee?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1629097499121-290fd9a95dee?w=800&h=600&fit=crop"
  },
  {
    id: 11,
    name: "Air Force 1 '07 LV8 'Overbranding'",
    grid_picture_url: "https://images.unsplash.com/photo-1602078019624-f4355d0687fd?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1602078019624-f4355d0687fd?w=800&h=600&fit=crop"
  },
  {
    id: 12,
    name: "Air Force 1 Shadow 'Pastel'",
    grid_picture_url: "https://images.unsplash.com/photo-1565569155036-d67b24c1beca?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1565569155036-d67b24c1beca?w=800&h=600&fit=crop"
  },
  {
    id: 13,
    name: "Yeezy Boost 350 V2 'Zebra'",
    grid_picture_url: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=800&h=600&fit=crop"
  },
  {
    id: 14,
    name: "Yeezy Boost 700 'Wave Runner'",
    grid_picture_url: "https://images.unsplash.com/photo-1580419529560-e64a9162e741?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1580419529560-e64a9162e741?w=800&h=600&fit=crop"
  },
  {
    id: 15,
    name: "Yeezy Slide 'Onyx'",
    grid_picture_url: "https://images.unsplash.com/photo-1764268641240-2675102b111d?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1764268641240-2675102b111d?w=800&h=600&fit=crop"
  },
  {
    id: 16,
    name: "Yeezy 500 'Blush'",
    grid_picture_url: "https://images.unsplash.com/photo-1552912276-56ef47874741?w=400&h=400&fit=crop",
    main_picture_url: "https://images.unsplash.com/photo-1552912276-56ef47874741?w=800&h=600&fit=crop"
  }
];

async function updateImages() {
  console.log("=== Nike-Life - Actualizando imágenes en Firestore ===\n");

  const productsRef = collection(db, "products");
  let updated = 0;
  let errors = 0;

  for (const update of imageUpdates) {
    try {
      const q = query(productsRef, where("id", "==", update.id));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        console.log(`  SKIP: "${update.name}" (id=${update.id}) no encontrado`);
        continue;
      }

      for (const docSnap of snapshot.docs) {
        await updateDoc(doc(db, "products", docSnap.id), {
          grid_picture_url: update.grid_picture_url,
          main_picture_url: update.main_picture_url
        });
      }

      console.log(`  OK:   "${update.name}" (id=${update.id}) imagen actualizada`);
      updated++;
    } catch (error) {
      console.error(`  ERROR: "${update.name}" - ${error.message}`);
      errors++;
    }
  }

  console.log(`\n=== Resultado: ${updated} actualizados, ${errors} errores ===`);
  console.log("\nListo! Las imágenes ahora coinciden con cada modelo.");
  process.exit(0);
}

updateImages();
