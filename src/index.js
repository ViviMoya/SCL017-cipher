import cipher from "./cipher.js"
//encode
const btnCipherEncode = document.getElementById("cipherEncode")

btnCipherEncode.addEventListener("click", () => {
    let textCipher = document.getElementById("inputCipher").value;
    let numberCipher = parseInt(document.getElementById("offsetCipher").value); 
//imprimir resultado
    document.getElementById("outputCipher").innerHTML = cipher.encode(textCipher,numberCipher);
}); // la propiedad innerHTML nos permite leer un dato o asignarlo al contenido de un div; en este caso usamos el getElementById 
 //en conjunto con innerHTML para tomar la referencia del id del contenedor que recabará este dato (el resultado en este caso). 

 //decode
const btnCipherDecode = document.getElementById ("cipherDecode")
btnCipherDecode.addEventListener("click", ()=> {
    let textCipher= document.getElementById("inputCipher").value;
    let numberCipher= parseInt(document.getElementById("offsetCipher").value);
//imprimir resultado de decode
    document.getElementById("outputCipher").innerHTML = cipher.decode(textCipher, numberCipher);
});