//Registro
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario creado con éxito");
            alert("Tu cuenta se ha creado con éxito");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            alert("Error de firebase > Código > " + error.code);
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
            alert("Error de firebase > Mensaje > " + error.message);
        });
}

module.exports = register

document.getElementById("login").onclick = function(email, password) {
    let userEmailInput = document.getElementById("user-email").value;
    let userPasswordInput = document.getElementById("user-password").value;
    if (validateEmailAndPassword(userEmailInput, userPasswordInput)) {
        let userName = document.getElementById("user-name").value;
        localStorage.setItem("user-name", userName);
        document.getElementById("user-name").innerHTML = "Mia";
        location = "timelineIndex.html";
    } else {
        alert("Invalid username or password")
    }
}

function validateEmailAndPassword(email, password) {
    if (defaultUserEmail === email && defaultUserPassword === password) {
        return true;
    } else {
        return false;
    }
}

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