import renderLink from '../atomos/a.js';
import renderUl from '../atomos/ul.js';
import renderLi from '../atomos/li.js';

export default function renderNavLink(links) {
  const ul = renderUl();
  const hashAtual = window.location.hash;

  links.forEach(link => {
    const li = renderLi();
    const a = renderLink(link.text, link.href);
    if (link.href === hashAtual) {
      a.setAttribute('aria-current', 'page');
      a.classList.add('ativo');
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  return ul;
}
