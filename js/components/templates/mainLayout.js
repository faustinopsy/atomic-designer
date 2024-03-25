import renderHeader from '../organismos/header.js';
import renderSidebar from '../organismos/sidebar.js';
import renderNav from '../organismos/navbar.js';
import renderMain from '../organismos/main.js';
import renderFooter from '../organismos/footer.js';

function renderMainLayout(pagina,titulo) {
  const mainLayout = document.createElement('div');
  const header = renderHeader(titulo);
  const sidebar = renderSidebar();

  mainLayout.appendChild(header);
  mainLayout.appendChild(renderNav());
  mainLayout.appendChild(renderMain(pagina));
  mainLayout.appendChild(renderFooter());
  return mainLayout;
}

export default renderMainLayout;
