export default function renderBotao(texto) {
    const button = document.createElement('button');
    button.textContent = texto;
    return button;
  }