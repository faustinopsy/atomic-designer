import renderHome from './paginas/home.js';
import renderPaginaSobre from './paginas/sobre.js'; 
import renderContato from './paginas/contato.js'; 
function renderApp() {
  const app = document.getElementById('app');
  
  function renderPage() {
    const hash = window.location.hash; 
    app.innerHTML = '';

    switch (hash) {
      case '#home':
        app.appendChild(renderHome());
        break;
      case '#sobre':
        app.appendChild(renderPaginaSobre());
        break;
      case '#contato':
        app.appendChild(renderContato());
        break;
      
      default:
        app.appendChild(renderHome());
        break;
    }
  }

  window.addEventListener('hashchange', renderPage);

  renderPage();
}

renderApp();
