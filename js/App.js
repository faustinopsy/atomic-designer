import renderHome from './paginas/home.js';
import renderPaginaSobre from './paginas/sobre.js'; 
import renderContato from './paginas/contato.js'; 
import render404 from './paginas/erro404.js'; 
function renderApp() {
  const app = document.getElementById('app');
  const rotas = {
    '#home': renderHome,
    '#sobre': renderPaginaSobre,
    '#contato': renderContato,
    '#erro': render404
  }
  async function renderPage() {
    const hash = window.location.hash; 
    app.innerHTML = '';
    const pagina = rotas[hash] || rotas['#erro']
    app.appendChild( await pagina());

  }

  window.addEventListener('hashchange', renderPage);

  renderPage();
}

renderApp();
