import renderLink from '../atomos/a.js';
import renderUl from '../atomos/ul.js';  
import renderLi from '../atomos/li.js'; 

export default function renderFooterLinks(links) {
  const ul = renderUl(); 

  links.forEach(link => {
    const li = renderLi(); 
    li.appendChild(renderLink(link.text, link.href)); 
    ul.appendChild(li); 
  });
  
  return ul; 
}
