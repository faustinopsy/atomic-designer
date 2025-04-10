import renderMainLayout from './mainLayout.js';
import renderTabelaFromObject from '../moleculas/tabela.js'; 

function renderSobre(pessoa,titulo) {
  const tabela = renderTabelaFromObject(pessoa);
  const layout = renderMainLayout(tabela, titulo); 
  return layout;
}

export default renderSobre;
