const btCadastrar = document.querySelector('#btCadastrar');
  
const gerarDadosForm = campos => {
    let dados = {};
    
    for(let campo of campos){
      dados[campo.name] = campo.value;
    }
  
    return dados;
}

const cadastrarUsuario = (event) => {
    event.preventDefault();
    const campos = document.querySelectorAll('form input');
    const dados = gerarDadosForm(campos);

    console.log(dados);

    fetch('http://104.46.38.224/api/usuario/cadastrar', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(respostaJson => {
        console.log(dados);
        alert('Usuário criado com sucesso!');
        window.location = "login.html";
    });
}

if(btCadastrar){
    btCadastrar.onclick = cadastrarUsuario;
}
