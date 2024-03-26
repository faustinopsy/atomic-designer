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
        console.time('performace-home')
        app.appendChild(renderHome());
        console.timeEnd('performace-home')
        break;
      case '#sobre':
        console.time('performace-sobre')
        app.appendChild(renderPaginaSobre());
        console.timeEnd('performace-sobre')
        break;
      case '#contato':
        console.time('performace-contato')
        app.appendChild(renderContato());
        console.timeEnd('performace-contato')
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
