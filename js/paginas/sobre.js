import renderSobre from '../components/templates/templateSobre.js';

function renderPaginaSobre(pagina) {
  const sobre = document.createElement('div');
  sobre.textContent = `Aqui temos a página SOBRE que poderia renderizar varias coisas`
  return renderSobre(pagina,'Sobre');
}

export default renderPaginaSobre;
