import renderMainLayout from '../components/templates/mainLayout.js';
import renderP from '../components/atomos/p.js';
import renderHr from '../components/atomos/hr.js';

function renderHome() {
  const home = document.createElement('div');
  home.appendChild(
    renderP(`Aqui temos a página principal que poderia renderizar varias coisas`)
  ) 
  home.appendChild(renderHr())
  return renderMainLayout(home,'Home');
}

export default renderHome;
