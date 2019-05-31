const btLogin = document.querySelector('button');

const gerarDadosForm = campos => {
    let dados = {};
    
    for(let campo of campos){
      dados[campo.name] = campo.value;
    }
  
    return dados;
}

const fazerLogin = (event) => {
    event.preventDefault();
    const campos = document.querySelectorAll('form input');
    const dados = gerarDadosForm(campos);
  
    fetch('http://23.97.172.42/api/usuario/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(respostaJson => {
      sessionStorage.setItem("usuario", JSON.stringify(respostaJson.usuario));
      sessionStorage.setItem("token", JSON.stringify(respostaJson.token));
  
      window.location = 'minhas_ocorrencias.html';
    });
}

if(btLogin){
    btLogin.onclick = fazerLogin;
}
