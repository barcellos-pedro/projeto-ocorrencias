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
  
    fetch('http://104.46.38.224/api/usuario/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(respostaJson => {
      if(respostaJson.token) {
        sessionStorage.setItem("usuario", (respostaJson.usuario));
        sessionStorage.setItem("token", (respostaJson.token));
        window.location = 'minhas_ocorrencias.html';
      }else{
        alert("Usúario ou senha inválidos.");
      }

    });
}

if(btLogin){
    btLogin.onclick = fazerLogin;
}
