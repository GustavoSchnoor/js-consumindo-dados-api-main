const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/') // Os .then() abaixo, poderiam ficar na frente AQUI, mas eu deixei abaixo para ficar mais bonito
    .then(resposta => resposta.json())
    .then(resp => {
        if(resp.erro) { // Na documentação da API, tem um campo no objeto, com o nome de "erro". Se ele tiver TRUE, é que o CEP esta preenchido corretamente, POREM ELE NAO EXISTE
            throw Error('Esse CEP nao existe!')
        } else {
            console.log(resp);
        }
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído'))

console.log(consultaCEP);