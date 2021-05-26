import cipher from "./cipher.js"
//encode
const btnCipherEncode = document.getElementById("cipherEncode")

btnCipherEncode.addEventListener("click", () => {
    let textCipher = document.getElementById("inputCipher").value;
    let numberCipher = parseInt(document.getElementById("offsetCipher").value);

    document.getElementById("outputCipher").innerHTML = cipher.encode(textCipher,numberCipher);
});

//decode
const btnCipherDecode = document.getElementById ("cipherDecode")
btnCipherDecode.addEventListener("click", ()=> {
    let textCipher= document.getElementById("inputCipher").value;
    let numberCipher= parseInt(document.getElementById("offsetCipher").value);

    document.getElementById("outputCipher").innerHTML = cipher.decode(textCipher, numberCipher);
});