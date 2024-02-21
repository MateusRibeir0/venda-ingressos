/*function comprar() {
    // Obter as informações do tipo do ingresso e a quantidade
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    // Criar condicional para chamar as devidas funções
    if (tipo.value == 'pista') {
        comprarPista(qtd);
        }
    if (tipo.value == 'superior') {
        comprarSuperior(qtd);
        }    
    if (tipo.value == 'inferior') {
        comprarInferior(qtd);
        }       
}

function comprarPista(qtd) {
    // Encontrar o numero de ingressos da pista
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); // qtd pista 100
    // Decrecer valor total da pista da quantidade comprada
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
*/

// Código otimizado

function comprar() {
    // Obter as informações do tipo do ingresso e a quantidade
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    // Verificar se o tipo de ingresso é válido
    if (tipo.value === 'pista' || tipo.value === 'superior' || tipo.value === 'inferior') {
        comprarIngresso(tipo.value, qtd);
    } else {
        alert('Tipo de ingresso inválido');
    }
}

function comprarIngresso(tipo, qtd) {
    // Encontrar o número de ingressos do tipo selecionado
    let qtdIngresso = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    // Decrementar valor total do tipo de ingresso da quantidade comprada
    if (qtd > qtdIngresso) {
        alert(`Quantidade indisponível para tipo ${tipo}`);
    } else {
        qtdIngresso -= qtd;
        document.getElementById(`qtd-${tipo}`).textContent = qtdIngresso;
        alert('Compra realizada com sucesso!');
    }
}
