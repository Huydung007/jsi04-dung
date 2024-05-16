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