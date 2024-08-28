const textArea = document.querySelector(".textArea");
const salida = document.querySelector(".salida");

function encriptar(stringEncriptado){
    let matrizLlaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0;i < matrizLlaves.length;i++){
        if(stringEncriptado.includes(matrizLlaves[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizLlaves[i][0],matrizLlaves[i][1]);
        }
    }

    return stringEncriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    salida.value = textoEncriptado;
    textArea.value = "";
    salida.style.backgroundImage = "none";
}

function desencriptar(stringEncriptado){
    let matrizLlaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0;i < matrizLlaves.length;i++){
        if(stringEncriptado.includes(matrizLlaves[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizLlaves[i][1],matrizLlaves[i][0]);
        }
    }

    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    salida.value = textoEncriptado;
    textArea.value = "";
    salida.style.backgroundImage = "none";
}

function btnCopiar(){
    salida.select();
    document.execCommand('copy');
}