//Login with email and password
function loginWithFirebase() {
    const emailValue = userEmail.value;
    const passwordValue = userPassword.value;

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
            alert("¡Has iniciado sesión con éxito, bienvenid@!");
            redirectFromLogin()
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
        redirectFromLogin()
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
            redirectFromLogin()
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}

// document.getElementById("login").onclick = function(email, password) {
//     let userEmailInput = document.getElementById("userEmail").value;
//     let userPasswordInput = document.getElementById("userPassword").value;
//     if (validateEmailAndPassword(userEmailInput, userPasswordInput)) {
//         let userName = document.getElementById("user-name").value;
//         localStorage.setItem("user-name", userName);
//         document.getElementById("user-name").innerHTML = "Mia";
//         location = "timelineIndex.html";
//     } else {
//         alert("Invalid username or password")
//     }
// }

// function validateEmailAndPassword(email, password) {
//     if (defaultUserEmail === email && defaultUserPassword === password) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isValidEmailFormat(userInput) {
    if (userInput.includes("@")) {
        if (substr(userInput.indexOf("@")).includes(".")) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isValidPasswordFormat(userInput) {
    if (userInput.lenght <= 8 && isInteger(userInput)) {
        return true;
    } else {
        return false;
    }
}

function isInteger(userInput) {
    let inputIsANumber = parseInt(userInput) != NaN;
    let inputIsAnInteger = userInput % 1 === 0;
    return inputIsANumber && inputIsAnInteger;
}

function redirectFromLogin() {
    location.href = "/Timeline/timelineIndex.html";
}