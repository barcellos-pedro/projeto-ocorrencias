const btCadastro = document.querySelector('#btCadastrar');

const teste = document.querySelectorAll('#form-cadastro input, select');
  
const gerarDadosForm = campos => {
    let dados = {};
    
    for(let campo of campos){
      dados[campo.name] = campo.value;
    }
  
    return dados;
}

const cadastrarOcorrencia = (event) => {
    event.preventDefault();
    const campos = document.querySelectorAll('#form-cadastro input, select');
    const dados = gerarDadosForm(campos);
    dados.resolvido =false;
    dados.coordenadas = {
        latitude: dados.latitude,
        longitude: dados.longitude
    };

    delete dados.latitude;
    delete dados.longitude;

    console.log(dados);

    fetch('http://104.46.38.224/api/ocorrencia', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(respostaJson => {
      alert('Ocorrência cadastrada com sucesso!');
      console.log(dados);
      //window.location = ""
    });
}

if(btCadastro){
    btCadastro.onclick = cadastrarOcorrencia;
}
