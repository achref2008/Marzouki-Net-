// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKihDvHTtupuiXn4ArwU-YMab35P0ZoIA",
    authDomain: "marzouki-net-page.firebaseapp.com",
    projectId: "marzouki-net-page",
    storageBucket: "marzouki-net-page.appspot.com",
    messagingSenderId: "196266586834",
    appId: "1:196266586834:web:16e688183657a405d0730b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign in function for login page (index.html)
function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to games page after successful login
            window.location.href = 'games.html';
        })
        .catch(e => {
            // Handle errors here
            alert("Login failed: " + e.message);
        });
}

// Clear the form after submission (optional)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').reset();
});
