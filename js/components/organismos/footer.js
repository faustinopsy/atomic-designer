import  renderNavLink from '../moleculas/navLink.js';
import  renderContatoInfo from '../moleculas/contatoInfo.js';
import  renderBotoesFooter from '../moleculas/botoesFooter.js';
import  renderCreditos  from '../moleculas/mostraCreditos.js';
import renderHr from '../atomos/hr.js';
const footerDados = {
    links: [
      { text: 'Home', href: '/home' },
      { text: 'Sobre', href: '/sobre' },
      { text: 'Contato', href: '/contato' },
    ],
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
//   const linksSection = document.createElement('div');
//   linksSection.appendChild(renderNavLink(footerDados.links));
//   footer.appendChild(linksSection);

  const contactSection = document.createElement('div');
  contactSection.appendChild(renderContatoInfo(footerDados.contactInfo));
  footer.appendChild(contactSection);

  const buttonsSection = document.createElement('div');
  buttonsSection.appendChild(renderBotoesFooter(footerDados.buttons));
  footer.appendChild(buttonsSection);

  footer.appendChild(renderCreditos(footerDados.credits));

  return footer; 
}
