let prompt = require('prompt-sync')();

let cepInformado = prompt ('Informe o CEP: ');

buscarCEP(cepInformado);

async function buscarCEP(cep){
    let options = {
        method: "GET",
        Headers: {"Content-Type" : "aplication/json"}
    };

    const promisseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options);

    const json = await promisseConsultaCEP.json();

    console.log(json);
}

//