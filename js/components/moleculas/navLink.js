import renderLink from '../atomos/a.js';
import renderUl from '../atomos/ul.js';
import renderLi from '../atomos/li.js';
import { ativarPrefetch } from '../../utils/prefetch.js';

export default function renderNavLink(links) {
  const ul = renderUl();
  const hashAtual = window.location.hash;
  const anchors = [];

  links.forEach(link => {
    const li = renderLi();
    const a = renderLink(link.text, link.href);
    if (link.href === hashAtual) {
      a.setAttribute('aria-current', 'page');
      a.classList.add('ativo');
    }
    anchors.push(a);
    li.appendChild(a);
    ul.appendChild(li);
  });

  ativarPrefetch(anchors);

  return ul;
}
