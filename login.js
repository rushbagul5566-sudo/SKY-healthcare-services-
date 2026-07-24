import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then(() => {

alert("Login Successful");
window.location.href = "admin.html";

})
.catch((error) => {

document.getElementById("message").innerHTML = "Login Failed";

});

});
