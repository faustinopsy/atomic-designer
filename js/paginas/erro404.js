import renderMainLayout from '../components/templates/mainLayout.js';
import renderLabel from '../components/atomos/label.js';
function render404() {
  const erro = document.createElement('div');
  erro.appendChild(
    renderLabel(`Página de erro, 404`)
  )
  return renderMainLayout(erro,'erro');
}

export default render404;
