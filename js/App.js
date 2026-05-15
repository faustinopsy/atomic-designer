import renderHome from './paginas/home.js';
import renderPaginaSobre from './paginas/sobre.js';
import renderContato from './paginas/contato.js';
import render404 from './paginas/erro404.js';

function renderApp() {
  const app = document.getElementById('app');
  app.setAttribute('aria-live', 'polite');
  app.setAttribute('aria-atomic', 'false');

  const rotas = {
    '#home': renderHome,
    '#sobre': renderPaginaSobre,
    '#contato': renderContato,
    '#erro': render404,
  };

  function limparApp() {
    while (app.firstChild) {
      app.removeChild(app.firstChild);
    }
  }

  async function renderPage() {
    const hash = window.location.hash || '#home';

    const loading = document.createElement('p');
    loading.textContent = 'Carregando...';
    limparApp();
    app.appendChild(loading);

    const pagina = rotas[hash] || rotas['#erro'];
    const conteudo = await pagina();

    limparApp();
    app.appendChild(conteudo);
  }

  window.addEventListener('hashchange', renderPage);
  renderPage();
}

renderApp();
