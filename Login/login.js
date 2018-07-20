// window.onload = () => {

//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) { //Si está logeado, mostraremos la opción loggedIn
//             loggedIn.style.display = "block";
//             loggedOut.style.display = "none";
//             username.innerText = user.displayName;
//         } else { //Si NO está logeado, mostraremos la opción loggedOut
//             loggedIn.style.display = "none";
//             loggedOut.style.display = "block";
//         }
//         console.log("User > " + JSON.stringify(user));
//     });


// }

//Login with email and password
function loginWithFirebase() {
    const emailValue = userEmail.value;
    const passwordValue = userPassword.value;

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
            alert("¡Has iniciado sesión con éxito, bienvenid@!");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            alert("Error de firebase > Código > " + error.code);
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
            alert("Error de firebase > Mensaje > " + error.message);
        });
}


//Google Login
function googleLoginWithFirebase() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log
            // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

//Fb Login
function facebookLoginWithFirebase() {
    const provider = new firebase.auth.FacebookAuthProvider(); // creamos un nuevo objeto 

    provider.setCustomParameters({ // le decimos que haga un login con facebook y enlace un popup
        'display': 'popup'
    });

    firebase.auth().signInWithPopup(provider)
        .then(() => {
            console.log("Login con facebook exitoso");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}