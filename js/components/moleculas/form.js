import renderFormulario from '../atomos/form.js';
import renderBotao from '../atomos/botao.js';
import renderInput from '../atomos/input.js';
import renderLabel from '../atomos/label.js';
export default function renderForm() {
  const form = renderFormulario();
  form.appendChild(renderLabel('Nome:'));
  form.appendChild(renderInput('text', 'Digite seu nome'));
  form.appendChild(document.createElement('br'));
  form.appendChild(renderLabel('E-mail:'));
  form.appendChild(renderInput('email', 'Digite seu e-mail'));
  form.appendChild(document.createElement('br'));
  form.appendChild(renderBotao('Enviar'));
  return form;
  
  }
  