/**
 * Nike-Life - Script para actualizar imágenes en Firestore
 *
 * Reemplaza las imágenes con fotos reales de GOAT.com que coinciden
 * con cada modelo de zapatilla exacto.
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

// Imágenes reales de GOAT.com - cada URL corresponde al modelo exacto
const imageUpdates = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/401/929/original/14741_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/401/929/original/14741_01.jpg.jpeg?width=750"
  },
  {
    id: 2,
    name: "Air Jordan 4 Retro 'Military Black'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/333/264/original/895934_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/333/264/original/895934_01.jpg.jpeg?width=750"
  },
  {
    id: 3,
    name: "Air Jordan 11 Retro 'Bred'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/099/941/848/original/478948_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/099/941/848/original/478948_01.jpg.jpeg?width=750"
  },
  {
    id: 4,
    name: "Air Jordan 3 Retro 'White Cement'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/913/710/original/1101598_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/913/710/original/1101598_01.jpg.jpeg?width=750"
  },
  {
    id: 5,
    name: "Air Max 90 'Infrared'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/099/906/882/original/695234_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/099/906/882/original/695234_01.jpg.jpeg?width=750"
  },
  {
    id: 6,
    name: "Air Max 1 'Anniversary Red'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/930/209/original/117569_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/077/930/209/original/117569_01.jpg.jpeg?width=750"
  },
  {
    id: 7,
    name: "Air Max 97 'Silver Bullet'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/011/414/159/original/88609_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/011/414/159/original/88609_01.jpg.jpeg?width=750"
  },
  {
    id: 8,
    name: "Air Max 270 'Black Anthracite'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/451/440/original/327273_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/451/440/original/327273_01.jpg.jpeg?width=750"
  },
  {
    id: 9,
    name: "Air Force 1 Low '07 'Triple White'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/113/540/382/original/712867_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/113/540/382/original/712867_01.jpg.jpeg?width=750"
  },
  {
    id: 10,
    name: "Air Force 1 Mid '07 'Black'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/017/664/803/original/315123_020.png.png?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/017/664/803/original/315123_020.png.png?width=750"
  },
  {
    id: 11,
    name: "Air Force 1 '07 LV8 'Overbranding'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/392/205/original/443766_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/392/205/original/443766_01.jpg.jpeg?width=750"
  },
  {
    id: 12,
    name: "Air Force 1 Shadow 'Pastel'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/396/160/original/654436_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/396/160/original/654436_01.jpg.jpeg?width=750"
  },
  {
    id: 13,
    name: "Yeezy Boost 350 V2 'Zebra'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/070/278/012/original/105568_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/070/278/012/original/105568_01.jpg.jpeg?width=750"
  },
  {
    id: 14,
    name: "Yeezy Boost 700 'Wave Runner'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/092/494/718/original/195483_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/092/494/718/original/195483_01.jpg.jpeg?width=750"
  },
  {
    id: 15,
    name: "Yeezy Slide 'Onyx'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/273/667/original/884794_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/273/667/original/884794_01.jpg.jpeg?width=750"
  },
  {
    id: 16,
    name: "Yeezy 500 'Blush'",
    grid_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/197/514/original/317455_01.jpg.jpeg?width=400",
    main_picture_url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/197/514/original/317455_01.jpg.jpeg?width=750"
  }
];

async function updateImages() {
  console.log("=== Nike-Life - Actualizando imágenes en Firestore ===\n");
  console.log("Usando imágenes reales de GOAT.com\n");

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
  console.log("\nListo! Las imágenes ahora son fotos reales de cada modelo.");
  process.exit(0);
}

updateImages();
