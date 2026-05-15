import renderContatoInfo from '../moleculas/contatoInfo.js';
import renderBotoesFooter from '../moleculas/botoesFooter.js';
import renderCreditos from '../moleculas/mostraCreditos.js';
import renderHr from '../atomos/hr.js';

export default function renderFooter(dados) {
  const footer = document.createElement('footer');
  footer.appendChild(renderHr());

  const contactSection = document.createElement('div');
  contactSection.appendChild(renderContatoInfo(dados.contactInfo));
  footer.appendChild(contactSection);

  const buttonsSection = document.createElement('div');
  buttonsSection.appendChild(renderBotoesFooter(dados.buttons));
  footer.appendChild(buttonsSection);

  footer.appendChild(renderCreditos(dados.credits));
  return footer;
}
