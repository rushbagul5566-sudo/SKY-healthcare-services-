import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCNWjruHTgBCz8YGXCP1R2P7m2mLs1i1mI",
  authDomain: "skyhealthcare-76db5.firebaseapp.com",
  projectId: "skyhealthcare-76db5",
  storageBucket: "skyhealthcare-76db5.firebasestorage.app",
  messagingSenderId: "341680101155",
  appId: "1:341680101155:web:62b8b496d21d2fadc71e96",
  measurementId: "G-DGRPR5QEM0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {

  if (!user) {
    window.location.href = "login.html";
  }

});
const bookingList = document.getElementById("bookingList");

const querySnapshot = await getDocs(collection(db, "bookings"));
let total = 0;
let nursing = 0;
let caretaker = 0;

const today = new Date().toDateString();
let todayCount = 0;
let total = 0;
let nursing = 0;
let caretaker = 0;
querySnapshot.forEach((doc) => 
  total = total + 1;

if(data.service == "Home Nursing"){
    nursing = nursing + 1;
}

if(data.service == "Caretaker"){
    caretaker = caretaker + 1;
}
  { document.getElementById("totalBookings").innerHTML = total;
document.getElementById("nursingCount").innerHTML = nursing;
document.getElementById("caretakerCount").innerHTML = caretaker;

    const data = doc.data();
total++;

if(data.service === "Home Nursing"){
    nursing++;
}

if(data.service === "Caretaker"){
    caretaker++;
}
    bookingList.innerHTML += `
        <tr>
            <td>${data.name}</td>
            <td>${data.mobile}</td>
            <td>${data.service}</td>
            <td>${data.address}</td>
            <td>${data.status}</td>
            <td>${data.date ? new Date(data.date.seconds * 1000) : ""}</td>
            <td>
    <button onclick="acceptBooking('${doc.id}')">✅ Accept</button>
    <button onclick="rejectBooking('${doc.id}')">❌ Reject</button>
</td>
        </tr>
    `;

});
document.getElementById("totalBookings").innerHTML = total;
document.getElementById("nursingCount").innerHTML = nursing;
document.getElementById("caretakerCount").innerHTML = caretaker;
