import h from '../atomos/htag.js';

function renderHeader(texto) {
    const header = document.createElement('header');
    header.appendChild(h('h1',texto));
    return header;
  }
  
  export default renderHeader;
  