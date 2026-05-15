import renderHome from './paginas/home.js';
import renderPaginaSobre from './paginas/sobre.js';
import renderContato from './paginas/contato.js';
import render404 from './paginas/erro404.js';
import { debugInfo, debugTime } from './utils/debug.js';
import { getPaginaCache, setPaginaCache } from './utils/paginaCache.js';

// Rotas que têm estado dinâmico do usuário — não devem ser cacheadas no DOM
const ROTAS_SEM_CACHE = new Set(['#home', '#contato']);

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
    debugInfo(`→ ${hash}`);

    // 1. Verifica cache de DOM antes de qualquer coisa
    const cached = getPaginaCache(hash);
    if (cached) {
      limparApp();
      app.appendChild(cached);
      return;
    }

    const encerrarTempo = debugTime(`render ${hash}`);

    // 2. Loading só aparece se o fetch demorar mais de 100ms
    const timerLoading = setTimeout(() => {
      const loading = document.createElement('p');
      loading.textContent = 'Carregando...';
      limparApp();
      app.appendChild(loading);
    }, 100);

    const pagina = rotas[hash] || rotas['#erro'];
    const conteudo = await pagina();

    clearTimeout(timerLoading);
    encerrarTempo();

    // 3. Guarda no cache DOM apenas rotas sem estado do usuário
    if (!ROTAS_SEM_CACHE.has(hash)) {
      setPaginaCache(hash, conteudo);
    }

    limparApp();
    app.appendChild(conteudo);
  }

  window.addEventListener('hashchange', renderPage);
  renderPage();
}

renderApp();
