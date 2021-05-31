const cipher = {
  encode: (textCipher,numberCipher) => {
    // solo se ingresarán letras en textCipher y númeron en numberCipher
if (typeof textCipher !== "string" || typeof numberCipher !== "number"){
  throw new TypeError("¡error!");
}
// creamos una variable que alojará nuestro resultado 
let result1= "";
// creamos un bucle para cifrar
for (let i = 0; i < textCipher.length; i++) {
  const codeAscii = textCipher[i].charCodeAt();
// crearemos un condición en donde ingresamos el rango de las letras (mayúsculas y minúsculas) del codigo ascii
  if ((codeAscii < 65 || codeAscii > 90) && (codeAscii < 97 || codeAscii > 122)) { 
     result1+= String.fromCharCode(codeAscii);
  }
  //para las mayúsculas
  if(codeAscii >= 65 && codeAscii <= 90){
    numberCipher = (numberCipher %26 +26) % 26;
    const abc= (codeAscii -65 + numberCipher);
    const offsetEncode= abc %26 + 65;
    result1 += String.fromCharCode(offsetEncode);
  }

  //para las minúsculas
 else if(codeAscii >= 97 && codeAscii <= 122){
    numberCipher = (numberCipher %26 +26) % 26;
    const abc= (codeAscii -97 + numberCipher);
    const offsetEncode= abc %26 + 97;
    result1 += String.fromCharCode(offsetEncode);
  }
  // si son espacios
  else if (codeAscii===32){
        result1+=" ";
  } 
  }
  return result1
  },

  decode: (textCipher,numberCipher) => {
     // solo se ingresarán letras en textCipher y númeron en numberCipher
    if (typeof textCipher !== "string" || typeof numberCipher !== "number"){
      throw new TypeError("¡error!");
    }
    // creamos otra variable que alojará nuestro resultado en descifrar
    let result2= "";
// creamos un bucle para cifrar
for (let i = 0; i < textCipher.length; i++) {
  const codeAscii = textCipher[i].charCodeAt();
  //rango de letras de mayusculas y minúsculas en codigo ascii
  if ((codeAscii < 65 || codeAscii > 90) && (codeAscii < 97 || codeAscii >122)) { 
    result2+= String.fromCharCode(codeAscii);
 }
 //mayúsculas
  if(codeAscii >= 65 && codeAscii <= 90){
  numberCipher = (numberCipher %26 +26) % 26;
  const abc= (codeAscii +65 - numberCipher);
  const offsetEncode= abc %26 +65;
  result2 += String.fromCharCode(offsetEncode);
}
  //minusculas
 else if (codeAscii>= 97 && codeAscii <= 122){
  numberCipher = (numberCipher %26 +26) % 26;
  const abc= (codeAscii +97 + numberCipher);
  const offsetEncode= abc %26 +97;
  result2 += String.fromCharCode(offsetEncode);
  } 
  // espacio
  else if (codeAscii===32){
        result2+=" ";
  }
   
  }
  return result2
}
}
export default cipher;

