async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) { // PARTICULARIDADE DA API, pois se o objeto.erro retornar como TRUE é porque o CEP foi preenchido certo, porem ele NÃO EXISTE
            throw Error('CEP não existente!')
        }

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {
        console.log(erro);
    }
}
