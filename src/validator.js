const validator = {
  
  isValid: function (creditCardNumber) {
     var arreglo = creditCardNumber.split("");
     //mostrar el arreglo en la consola
     //console.log("el arreglo es" + arreglo);
     // convertir el string en entero con parseInt
     let arrOfNum = arreglo.reverse().map(x => parseInt(x));
     let lastDigit = arrOfNum.splice(0, 1)[0];
  let sum = arrOfNum.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
   
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
