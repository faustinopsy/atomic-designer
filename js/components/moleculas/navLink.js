import renderLink from '../atomos/a.js';
import renderUl from '../atomos/ul.js';  
import renderLi from '../atomos/li.js'; 
 
export default function renderNavLink(links) {
  const navbar = document.createElement('nav');
  const ul = renderUl(); 

  links.forEach(link => {
    const li = renderLi(); 
    li.appendChild(renderLink(link.text, link.href));
    ul.appendChild(li);
  });

  navbar.appendChild(ul);
  return navbar;
}
