import renderMainLayout from '../components/templates/mainLayout.js';
import renderP from '../components/atomos/p.js';
import renderHr from '../components/atomos/hr.js';
import { getCEP } from '../utils/api.js';
async function renderHome() {
    const dados = await getCEP('01122000')
    
  const home = document.createElement('div');
  home.appendChild(
    renderP(`Aqui temos a página principal que poderia renderizar varias coisas`)
  ) 
  home.appendChild(renderHr())
  
  home.appendChild(renderP(dados.localidade))
  home.appendChild(renderP(dados.logradouro))
  home.appendChild(renderP(dados.bairro))

  return renderMainLayout(home,'Home');
}

export default renderHome;
