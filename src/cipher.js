const cipher = {
  encode: (textCipher,numberCipher) => {
if (typeof textCipher !== "string" || typeof numberCipher !== "number"){
  throw new TypeError("¡error!");
}
let result1= "";
for (let i = 0; i < textCipher.length; i++) {
  const codeAscii = textCipher[i].charCodeAt();
  
  //mayusculas
  if ((codeAscii < 65 || codeAscii > 90) && (codeAscii < 97 || codeAscii > 122)) { 
     result1+= String.fromCharCode(codeAscii);
  }
  if(codeAscii >= 65 && codeAscii <= 90){
    numberCipher = (numberCipher %26 +26) % 26;
    const abc= (codeAscii -65 + numberCipher);
    const offsetEncode= abc %26 + 65;
    result1 += String.fromCharCode(offsetEncode);
  }

  //minusculas
 else if(codeAscii >= 97 && codeAscii <= 122){
    numberCipher = (numberCipher %26 +26) % 26;
    const abc= (codeAscii -97 + numberCipher);
    const offsetEncode= abc %26 + 97;
    result1 += String.fromCharCode(offsetEncode);
  }
  // espacio
  else if (codeAscii===32){
        result1+=" ";
  } 
  }
  return result1
  },

  decode: (textCipher,numberCipher) => {
    if (typeof textCipher !== "string" || typeof numberCipher !== "number"){
      throw new TypeError("¡error!");
    }
    let result2= "";

for (let i = 0; i < textCipher.length; i++) {
  const codeAscii = textCipher[i].charCodeAt();
  //mayúsculas
  if ((codeAscii < 65 || codeAscii > 90) && (codeAscii < 97 || codeAscii >122)) { 
    result2+= String.fromCharCode(codeAscii);
 }
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

