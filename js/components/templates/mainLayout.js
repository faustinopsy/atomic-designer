import renderHeader from '../organismos/header.js';
import renderSidebar from '../organismos/sidebar.js';
import renderNav from '../organismos/navbar.js';
import renderMain from '../organismos/main.js';
import renderFooter from '../organismos/footer.js';
import { NAV_LINKS, FOOTER_DADOS } from '../../config.js';

export default function renderMainLayout(pagina, titulo) {
  const mainLayout = document.createElement('div');

  mainLayout.appendChild(renderHeader(titulo));
  mainLayout.appendChild(renderNav(NAV_LINKS));
  mainLayout.appendChild(renderMain(pagina));
  mainLayout.appendChild(renderSidebar());
  mainLayout.appendChild(renderFooter(FOOTER_DADOS));

  return mainLayout;
}
