// pode ser utlizidada para alguns casos, nao que seja a forma errada de ser feita 
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

// o jeito mais simples de se fazer ao inves de ficar todo tempo colocando os os let e ect... 
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

}
function exibirMensagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo do numero secreto');
    exibirTextoNaTela ('p', 'Escolha um numero entre 1 a 10');

}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
                


    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else {
            exibirTextoNaTela('p','O numero secreto e maior');
        }
        tentativas ++;
        limparCampo();
    }
}


function gerarNumeroAleatorio(){
     let numeroEscolhido = parseInt (Math.random() * 10 + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
     }


     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

     } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
     }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


}
