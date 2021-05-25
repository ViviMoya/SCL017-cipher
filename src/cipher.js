window.cipher = {
    encode: (textCipher,numberCipher) => {
      let result1= "";
  for (let i = 0; i < textCipher.length; i++) {
    let codeAscci = textCipher.charCodeAt(i);
    let offsetEncode;
    //mayusculas
    if (codeAscci>=65 && codeAscci<=90) {
      offsetEncode = (codeAscci-65+numberCipher)%26+65;
         result1+= String.fromCharCode(offsetEncode);
    }
    //minusculas
   else if (codeAscci>=97 && codeAscci<=122) {
          offsetEncode= (codeAscci-97+numberCipher)%26+97;
          result1+=String.fromCharCode(offsetEncode);
    } 
    // espacio
    else if (codeAscci===32){
          result1+=" ";
    }
        
    }
    return result1
    },
    decode: (textCipher,numberCipher) => {
      let result2= "";
  for (let i = 0; i < textCipher.length; i++) {
    let codeAscci = textCipher.charCodeAt(i);
    let offsetEncode;
    //mayusculas
    if (codeAscci>=65 && codeAscci<=90) {
      offsetEncode = (codeAscci+65-numberCipher)%26+65;
         result2+= String.fromCharCode(offsetEncode);
    }
    //minusculas
   else if (codeAscci>=97 && codeAscci<=122){
         offsetEncode= (codeAscci-45-numberCipher)%26+97;
          result2+=String.fromCharCode(offsetEncode);
    } 
    // espacio
    else if (codeAscci===32){
          result2+=" ";
    }
     
    }
    return result2
  }
  };
