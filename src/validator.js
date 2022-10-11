const validator = {
  
  isValid: function (creditCardNumber) {
     var arreglo = creditCardNumber.split("");
     //mostrar el arreglo en la consola
     //console.log("el arreglo es" + arreglo);
     // convertir el string en entero con parseInt
     const arrOfNum = arreglo.map(str => { //map retorna un array nuevo
       return Number(str);
     });
     //mostrar en consola
     //console.log("en arreglo es" + arrOfNum);
     //variable para el lugar
     let resultado = 0;
     for (let i = 0; i < arrOfNum.length; i++) {
      var numero = (arrOfNum[i]);
      if (i % 2 === 0){
        numero *= 2;
        if (numero > 9){
          numero -= 9;
        }
      }
      resultado += numero;
      //console.log (resultado);
    }
    if (resultado % 10 === 0){
      //alert ("es valida");
    } else {
     // alert ("no es valida");
    }
    return resultado % 10 === 0; // AÑADIDO!!!
  },
  maskify : function (creditCardNumber){
    var largo = creditCardNumber.length;
    let resultado = "";
    if(largo > 4) {
      for (let i = 0; i < largo; i++) {
        if( i < largo - 4 ) {
            resultado += "#"
        } else {
          resultado += creditCardNumber[i];
        }
      }
    } else {
      return creditCardNumber;
    }
    return resultado;
  }
};

export default validator;
