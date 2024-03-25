
import renderBotao from '../atomos/botao.js';
export default function renderBotoesFooter(botoes) {
    const buttonContainer = document.createElement('div'); 
  
    botoes.forEach(botao => {
      const buttonElement = renderBotao(botao.text); 
      buttonContainer.appendChild(buttonElement); 
    });
  
    return buttonContainer; 
  }