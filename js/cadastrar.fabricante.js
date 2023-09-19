async function buscarCEP(){
    limpar();
    var cepInformado = document.getElementById('cep').value;
    cepInformado = cepInformado.replace('-', '');

    var cepValido = validarCEP(cepInformado);
    if(cepValido){
        fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(resultado => resultado.json())
        .then(json => {
            if(json.erro){
                mostrarTelaErro();
            }else{
                preencherCamposComJSON(json);
            }
        })
        .catch(erro => {
            mostrarTelaErro();
        })
    }
}

function preencherCamposComJSON(json){
    if(json.nome){ 
        nome.value = json.nome;
    }else{
        nome.disabled = false;
    }

    if(json.cnpj){ 
        cnpj.value = json.cnpj;
    }else{
        cnpj.disabled = false;
    }

    cep.value = json.localidade;
    cep.value = true;
    cidade.value = json.localidade;
    estado.value = json.uf;
    cidade.disabled = true;
    estado.disabled = true;
}

function limpar(){
    formulario.style = 'background-color: blue';
    nome.value = '';
    cnpj.value = '';

    cep.disabled = true;
    cidade.disabled = true;
    estado.disabled = true;
}

function mostrarTelaErro(){
    limpar();
    formulario.style = 'background-color: red';
    alert('CEP informado não existe');
}

function validarCEP(cepFormatado){
    var fieldsetCep = document.getElementById('fieldset-consulta-cep');
    var cepValido = false;
    if(cepFormatado.length == 8){
        fieldsetCep.style = 'background-color: grey';
        cepValido = true;
    }else{
        fieldsetCep.style = 'background-color: yellow';
    }

    return cepValido;
}

