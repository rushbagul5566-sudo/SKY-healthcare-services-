import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const staffForm = document.getElementById("staffForm");

staffForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "staff"), {
    name: document.getElementById("staffName").value,
    mobile: document.getElementById("staffMobile").value,
    role: document.getElementById("staffRole").value
  });

  alert("Staff Added Successfully!");
  staffForm.reset();
});
