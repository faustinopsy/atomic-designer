import renderMainLayout from './mainLayout.js';
import renderTabelaFromObject from '../moleculas/tabela.js'; 

const data = [
  { Nome: 'João', Idade: 30, Sexo: 'Masculino' },
  { Nome: 'Maria', Idade: 25, Sexo: 'Feminino' }
];

function renderSobre(pagina,titulo) {
  const tabela = renderTabelaFromObject(data);
  const layout = renderMainLayout(tabela, titulo); 
  return layout;
}

export default renderSobre;
