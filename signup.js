// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ2JkofSIm0-t22BnPcclxlbCXTdnthJk",
    authDomain: "jsa04-d.firebaseapp.com",
    projectId: "jsa04-d",
    storageBucket: "jsa04-d.appspot.com",
    messagingSenderId: "147279952579",
    appId: "1:147279952579:web:624da338b9f1e3d66b4076",
    measurementId: "G-WZSWYH8WG4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Khai báo auth và database của Firebase
const auth = firebase.auth()
const database = firebase.database()

const signup_form = document.querySelector('#signup-form')
signup_form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = signup_form['username'].value
    const email = signup_form['email'].value
    const password = signup_form['password'].value
    // console.log(username, email, password)

    auth.createUserWithEmailAndPassword(email, password).then(
        (cred) => {
            alert('Sign up successfully!')
            console.log(cred)
            signup_form.reset()
        }
    )

})