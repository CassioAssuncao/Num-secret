let listaDeNumerosSorteados = [];
let numeraMaximo = 50   ;
let numeroSecreto = gerarNumRandom();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    //var textoFinal;
    //textoFinal = `${texto} ${numeraMaximo}`;
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function exibirmensagemInicial(){
exibirTextoTela('h1', 'O jogo do número secreto');
exibirTextoTela('p', `Escolha um número entre 1 e ${numeraMaximo}`);
}

exibirmensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(`O botão foi apertado ;D ${numeroSecreto} - ${chute}`);

    if(chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentavia = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentavia);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoTela('p', 'O número secreto é maior.')
        }
        tentativas++;
        limpaCampo();
    }
}

function gerarNumRandom() {
    let numeroEscolhido =  parseInt(Math.random() * numeraMaximo + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeElementosNaLista == numeraMaximo){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumRandom();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumRandom();
    limpaCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}