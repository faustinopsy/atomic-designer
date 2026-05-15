export default function renderBotao(texto, tipo = 'button') {
  const button = document.createElement('button');
  button.type = tipo;
  button.textContent = texto;
  return button;
}
