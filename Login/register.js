//Registro
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario creado con éxito");
            alert("Tu cuenta se ha creado con éxito");
            redirectFromLogin()

        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            alert("Error de firebase > Código > " + error.code);
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
            alert("Error de firebase > Mensaje > " + error.message);
        });
}

function redirectFromLogin() {
    location.href = "/Timeline/timelineIndex.html";
}