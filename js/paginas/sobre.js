import renderSobre from '../components/templates/templateSobre.js';
import renderLabel from '../components/atomos/label.js';
import { getUser } from '../utils/api.js';

async function renderPaginaSobre() {
  const dados = await getUser()
  if(dados){
    dados.forEach(element => {
      delete element.address
      delete element.company
    });
    const sobre = document.createElement('div');
    sobre.appendChild(
      renderLabel(`Aqui temos a página SOBRE que poderia renderizar varias coisas`)
    )
    return renderSobre(dados,'Sobre');
  }

 
  
}

export default renderPaginaSobre;
