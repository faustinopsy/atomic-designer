import  renderContatoInfo from '../moleculas/contatoInfo.js';
import  renderBotoesFooter from '../moleculas/botoesFooter.js';
import  renderCreditos  from '../moleculas/mostraCreditos.js';
import renderHr from '../atomos/hr.js';
const footerDados = {
    contactInfo: [
      { text: 'Endereço: Rua ABC, 123 - Cidade, Estado' },
      { text: 'Telefone: (00) 1234-5678' },
      { text: 'E-mail: contato@example.com' }
    ],
    buttons: [
      { text: 'Inscreva-se', action: 'subscribe' },
      { text: 'Login', action: 'login' }
    ],
    credits: '© 2024 Minha Empresa. Todos os direitos reservados.'
  };
  
export default function renderFooter() {
  const footer = document.createElement('footer'); 
  footer.appendChild(renderHr());

  const contactSection = document.createElement('div');
  contactSection.appendChild(renderContatoInfo(footerDados.contactInfo));
  footer.appendChild(contactSection);

  const buttonsSection = document.createElement('div');
  buttonsSection.appendChild(renderBotoesFooter(footerDados.buttons));
  footer.appendChild(buttonsSection);

  footer.appendChild(renderCreditos(footerDados.credits));

  return footer; 
}
