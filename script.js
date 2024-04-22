async function buscaEndereco(cep) {
    var mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = '';

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) { // PARTICULARIDADE DA API, pois se o objeto.erro retornar como TRUE é porque o CEP foi preenchido certo, porem ele NÃO EXISTE
            throw Error('CEP não existente!')
        }

        var cidade = document.querySelector('#cidade');
        var logradouro = document.querySelector('#endereco');
        var estado = document.querySelector('#estado');

        // AQUI NESSES 3, estamos acessando o OBJETO ja convertido json da API(consultaCEPConvertida), com os dados e acessando o valor das chaves correspondentes
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro; 
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP informado esta incorreto!</p>`;
        console.log(erro);
    }
}

var cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value)) // Colocamos a nossa função criada dentro de outra função, pois se colocarmos a função criada direto com o cep.value, ele vai simplesmente executar assim que chegar nessa linha, e nao queremos isso, queremos que ele execute, SOMENTE quando sair do foco do campo (focusout)