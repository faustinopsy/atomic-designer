import renderSobre from '../components/templates/templateSobre.js';
import renderLabel from '../components/atomos/label.js';
function renderPaginaSobre(pagina) {
  const sobre = document.createElement('div');
  sobre.appendChild(
    renderLabel(`Aqui temos a página SOBRE que poderia renderizar varias coisas`)
  )
  return renderSobre(pagina,'Sobre');
}

export default renderPaginaSobre;
