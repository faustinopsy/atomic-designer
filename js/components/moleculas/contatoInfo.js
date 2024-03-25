import renderUl from '../atomos/ul.js';  
import renderLi from '../atomos/li.js'; 
export default function renderContatoInfo(info) {
    const ul = renderUl(); 
  
    info.forEach(item => {
      const li = renderLi(); 
      li.textContent = item.text; 
      ul.appendChild(li); 
    });
  
    return ul; 
  }