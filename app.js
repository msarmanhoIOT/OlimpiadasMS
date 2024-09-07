function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
 
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim()

    // Se o campo pesquisa for uma String sem Nada
    if (!campoPesquisa) {
        section.innerHTML ="<p>NADA FOI ENCONTRADO VOCE PRECISA DIGITAR O NOME DO ATLETA OU ESPORTE</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase ()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto 'dado' dentro do array 'dados'
    for (let dado of dados) {
     titulo = dado.titulo.toLowerCase()
     descricao = dado.descricao.toLowerCase()
     tags = dado.tags.toLowerCase()

        // Se o titulo includes campo pesquisa 
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
      // Cria um novo elemento 
        resultados += `
        <div class="item-resultado">
            <h2> 
                <a href="https://pt.wikipedia.org/wiki/Rayssa_Leal" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class="descricao-meta">
                ${dado.descricao} 
            </p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
    `; 
      }
              
    }

    if (!resultados) {
        resultados = "<p> Nada foi Encontrado </p>"
    }
    console.log(campoPesquisa);
    // Define o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}
// console.log(dados);

