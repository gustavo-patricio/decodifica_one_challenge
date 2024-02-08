document.addEventListener('DOMContentLoaded', function () {
    function validarEntrada() {
        var textarea = document.getElementById('text_input');
        var mensagemErro = document.querySelector('.content__button__alert');


        var regex = /[^\w\s]/;
        if (regex.test(textarea.value)) {
            mensagemErro.style.display = 'flex';

            return;
        }
        mensagemErro.style.display = 'none';
        document.querySelector('.container__alerts').style.display = 'none';
        document.querySelector('#btnCopiar').style.display = 'none';
    }

    document.getElementById('text_input').addEventListener('input', validarEntrada);
});


function encryptMessage() {

    let encript_key = [
        {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        },
        /[aeiou]/g
    ];

    let message = document.querySelector('#text_input').value;

    if (document.querySelector('.text__area').value === '') {
        document.querySelector('.container__alerts').style.display = 'flex';
        if(window.innerWidth <= 900){
            document.querySelector('.img_alert').style.display = 'none';
        }else{
            document.querySelector('.img_alert').style.display = 'flex';
        }

        document.querySelector('.message__alert').innerHTML = 'Nenhuma mensagem encontrada';
        document.querySelector('.message__alert_alternative').innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar';
        return;
    }

    message = message.toLowerCase();

    var mensagemEncriptada = message.replace(encript_key[1], function (match) {
        return encript_key[0][match] || match;
    });
    
    document.querySelector('.container__alerts').style.display = 'flex';
    document.querySelector('.img_alert').style.display = 'none';
    document.querySelector('.message__alert').innerHTML = 'Texto Encriptado';
    document.querySelector('.message__alert_alternative').innerHTML = mensagemEncriptada;
    document.querySelector('#btnCopiar').style.display = 'inline';
}

function decryptMessage() {
    let decript_key = [
        {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        },
        /ai|enter|imes|ober|ufat/g
    ]

    let message = document.querySelector('#text_input').value;

    if (document.querySelector('.text__area').value === '') {
        document.querySelector('.container__alerts').style.display = 'flex';
        if(window.innerWidth <= 900){
            document.querySelector('.img_alert').style.display = 'none';
        }else{
            document.querySelector('.img_alert').style.display = 'flex';
        }
        document.querySelector('.img_alert').style.display = 'flex';
        document.querySelector('.message__alert').innerHTML = 'Nenhuma mensagem encontrada';
        document.querySelector('.message__alert_alternative').innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar';
        return;
    }

    message = message.toLowerCase();

    var mensagemEncriptada = message.replace(decript_key[1], function (match) {
        return decript_key[0][match] || match;
    });
    
    document.querySelector('.container__alerts').style.display = 'flex';
    document.querySelector('.img_alert').style.display = 'none';
    document.querySelector('.message__alert').innerHTML = 'Texto Encriptado';
    document.querySelector('.message__alert_alternative').innerHTML = mensagemEncriptada;
    document.querySelector('#btnCopiar').style.display = 'inline';

}

document.getElementById('btnCopiar').addEventListener('click', execCopy);
function execCopy() {
    var paragrafo = document.querySelector('.message__alert_alternative');
    var textoParaCopiar = paragrafo.innerText;

    // Cria uma área de transferência temporária
    var textarea = document.createElement('textarea');
    textarea.value = textoParaCopiar;
    document.body.appendChild(textarea);

    // Seleciona e copia o texto
    textarea.select();
    document.execCommand('copy');

    // Remove a área de transferência temporária
    document.body.removeChild(textarea);

    // Mensagem de feedback
    alert('Conteúdo copiado com sucesso!');
}


