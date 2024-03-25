import renderMainLayout from '../components/templates/mainLayout.js';

function renderHome() {
  const home = document.createElement('div');
  home.textContent = `Aqui temos a página principal que poderia renderizar varias coisas`
  return renderMainLayout(home,'Home');
}

export default renderHome;
