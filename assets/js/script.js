const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const mensajeText = document.querySelector('.mensaje__info');
const btnCopiar = document.querySelector('.btn-copiar');
const mensajeCopiado = document.querySelector('.mensaje__copiado');


function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value);
    mensaje.innerHTML = textoEncriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
    mensajeText.style.display = "none";
    btnCopiar.style.display = "block";
    mensajeCopiado.style.display = "none";
}

function btnDesencriptar() {
    let textoDesencriptado = desencriptar(textArea.value);
    mensaje.innerHTML = textoDesencriptado;
    textArea.value = '';
    mensaje.style.backgroundImage = "none";
    mensajeText.style.display = "none";
    btnCopiar.style.display = "block";
    mensajeCopiado.style.display = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0]) ) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0]) ) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return stringDesencriptada
}

function copiar() {
    let content = document.querySelector('.mensaje');
    content.select();
    document.execCommand('copy');
    mensaje.innerHTML = '';
    mensaje.style.backgroundImage = "url('assets/img/muneco.png'";
    mensajeText.style.display = "none";
    btnCopiar.style.display = "none";
    mensajeCopiado.style.display = "inline";
}