document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".hero button");

    button.addEventListener("click", () => {
        alert("Welcome to Sky Healthcare!\nOnline Booking feature will be available soon.");
    });
});
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNWjruHTgBCz8YGXCP1R2P7m2mLs1i1mI",
  authDomain: "skyhealthcare-76db5.firebaseapp.com",
  projectId: "skyhealthcare-76db5",
  storageBucket: "skyhealthcare-76db5.firebasestorage.app",
  messagingSenderId: "341680101155",
  appId: "1:341680101155:web:62b8b496d21d2fadc71e96",
  measurementId: "G-DGRPR5QEM0"
};
// Booking Form Firebase Save

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const service = document.getElementById("service").value;
    const address = document.getElementById("address").value;

    try {
      await addDoc(collection(db, "bookings"), {
        name: name,
        mobile: mobile,
        service: service,
        address: address,
        date: new Date()
      });

      alert("Booking Successfully Submitted!");
      bookingForm.reset();

    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    }
  });
}
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const service = document.getElementById("service").value;
    const address = document.getElementById("address").value;

    try {
      await addDoc(collection(db, "bookings"), {
        name,
        mobile,
        service,
        address,
        date: new Date()
      });

      alert("Booking Successfully Submitted!");
      bookingForm.reset();

    } catch (error) {
      console.log(error);
      alert("Error submitting booking");
    }
  });
}
