import renderMainLayout from '../components/templates/mainLayout.js';
import renderP from '../components/atomos/p.js';
import renderHr from '../components/atomos/hr.js';
import renderInput from '../components/atomos/input.js';
import renderBotao from '../components/atomos/botao.js';
import renderLabel from '../components/atomos/label.js';
import { getCEP } from '../utils/api.js';

function renderResultadoCEP(dados) {
  const wrapper = document.createElement('div');
  if (!dados || dados.erro) {
    wrapper.appendChild(renderP('CEP não encontrado.'));
    return wrapper;
  }
  wrapper.appendChild(renderP(`Logradouro: ${dados.logradouro || '—'}`));
  wrapper.appendChild(renderP(`Bairro: ${dados.bairro || '—'}`));
  wrapper.appendChild(renderP(`Cidade: ${dados.localidade} - ${dados.uf}`));
  wrapper.appendChild(renderP(`CEP: ${dados.cep}`));
  return wrapper;
}

async function renderHome() {
  const home = document.createElement('div');

  const titulo = renderP('Busca de Endereço por CEP');
  home.appendChild(titulo);

  const labelCep = renderLabel('CEP:');
  const inputCep = renderInput('text', 'Ex: 01310100', 'CEP');
  inputCep.id = 'campo-cep';
  inputCep.maxLength = 9;
  labelCep.htmlFor = 'campo-cep';

  const botaoBuscar = renderBotao('Buscar');
  const resultado = document.createElement('div');

  botaoBuscar.addEventListener('click', async () => {
    const cep = inputCep.value.replace(/\D/g, '');
    if (cep.length !== 8) {
      while (resultado.firstChild) resultado.removeChild(resultado.firstChild);
      resultado.appendChild(renderP('CEP deve ter 8 dígitos numéricos.'));
      return;
    }
    while (resultado.firstChild) resultado.removeChild(resultado.firstChild);
    resultado.appendChild(renderP('Buscando...'));
    const dados = await getCEP(cep);
    while (resultado.firstChild) resultado.removeChild(resultado.firstChild);
    resultado.appendChild(renderResultadoCEP(dados));
  });

  home.appendChild(labelCep);
  home.appendChild(inputCep);
  home.appendChild(botaoBuscar);
  home.appendChild(renderHr());
  home.appendChild(resultado);

  return renderMainLayout(home, 'Home');
}

export default renderHome;
