import renderNavlink from '../moleculas/navLink.js';
const links = [
    { text: 'Home', href: '#home' },
    { text: 'Sobre', href: '#sobre' },
    { text: 'Contato', href: '#contato' }
  ];
  function renderNav() {
    const nav = document.createElement('nav');
    nav.appendChild(renderNavlink(links))
    return nav;
  }
  
  export default renderNav;