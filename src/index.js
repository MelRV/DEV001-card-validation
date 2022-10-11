import validator from './validator.js';

//console.log(validator);

//  Para dar opciones de mes
for (let i= 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value =  i;
    option.innerText = i;
    document.getElementById("selectMes").appendChild (option);
}
// Opciones  del año actual + 8 
const yearActual = new Date ().getFullYear();
for (let i = yearActual; i  <= yearActual + 8; i++){
    let option = document.createElement('option'); 
    option.value =  i;
    option.innerText = i;
    document.getElementById("selectYear").appendChild (option);
}  

document.getElementById("validar").addEventListener("click",function (event) {
    event.preventDefault ();
    let datos = document.getElementById("inputNumero").value;
    let inputNombre = document.getElementById ("inputNombre").value;
    if (datos === "" || inputNombre.value === ""){
        alert("Ingresa tus datos");
        return datos;
    } else {
        // Si es valida entonces alert success sino alert error
        let creditCardNumber = document.getElementById("inputNumero").value;
        let esValida = validator.isValid(creditCardNumber);
        if (esValida === true){
            alert ("Yahoo! Ya tienes tus boletos para Bad Bunny");
        } else {
            alert ("Verifica tus datos de nuevo");
        }
        //Maskify en pantalla
        let inputNumero = document.getElementById("inputNumero");
        let validaM = validator.maskify (inputNumero.value);
        inputNumero.value = validaM;
        
    }
})