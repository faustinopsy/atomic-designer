import renderSobre from '../components/templates/templateSobre.js';
import renderMainLayout from '../components/templates/mainLayout.js';
import renderP from '../components/atomos/p.js';
import { getUser } from '../utils/api.js';

async function renderPaginaSobre() {
  const dados = await getUser();
  const dadosFiltrados = dados.map(({ address, company, ...resto }) => resto);

  if (dadosFiltrados.length === 0) {
    const aviso = document.createElement('div');
    aviso.appendChild(renderP('Não foi possível carregar os dados.'));
    return renderMainLayout(aviso, 'Sobre');
  }

  return renderSobre(dadosFiltrados, 'Sobre');
}

export default renderPaginaSobre;
