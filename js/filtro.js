// IMPLEMENTANDO UM FILTRO DE PESQUISA NA PÁGINA DE USUÁRIO
const pesquisar = document.querySelector('#pesquisar');
const tbody = document.querySelector('#tabela');

pesquisar.addEventListener('keyup', function() {
  const resultadoPesquisa = pesquisar.value.toLowerCase();
  const linhas = tbody.querySelectorAll('tbody tr');


  linhas.forEach(function(registro) {
    const coluna = registro.querySelectorAll('td');
    let mostrarLinha = false;

    coluna.forEach(function(coluna) {
      if (coluna.innerText.toLowerCase().indexOf(resultadoPesquisa) !== -1) {
        mostrarLinha = true;
      }
    });

    if (mostrarLinha) {
      registro.style.display = '';
    } else {
      registro.style.display = 'none';
    }
  });
});
