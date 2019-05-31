const consultarOcorrencia = () => {
    fetch('http://104.46.38.224/api/ocorrencia/listar', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        // 'Authorization': 'Bearer ' + sessionStorage.get('token')
      }
    })
    .then(resposta => resposta.json())
    .then(dados => {
      console.log(dados);
      mostrarOcorrencia(dados);
    });
}

const mostrarOcorrencia = (ocorrencias) => {
    let secao = document.querySelector('#ocorrencias_geral');

    for(let ocorrencia of ocorrencias){
      secao.innerHTML += `
        <div class="cards">
            <img src="../images/poste.jpg" alt="">
            <div class="cards-conteudo">
                <p>${ocorrencia.categoria}</p>
                <p>${ocorrencia.titulo}</p>
                <p>Nível: <span>${ocorrencia.nivel}</span> </p>
                <p>${ocorrencia.coordenadas.latitude + " / " + ocorrencia.coordenadas.longitude}</p>
            <div>
            <a href="#">
                <button class="btVer">Ver +</button>
            </a>
            <a href="../html/editar_ocorrencia.html">
                <button class="btVer">Alterar</button>
                </a>
            </div>
            </div>
        </div>
      `;  
    }
  }

consultarOcorrencia();
