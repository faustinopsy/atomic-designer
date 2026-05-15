import renderFormElement from '../atomos/form.js';
import renderBotao from '../atomos/botao.js';
import renderInput from '../atomos/input.js';
import renderLabel from '../atomos/label.js';

export default function renderForm() {
  const form = renderFormElement();

  const labelNome = renderLabel('Nome:');
  const inputNome = renderInput('text', 'Digite seu nome', 'Nome');
  inputNome.id = 'campo-nome';
  labelNome.htmlFor = 'campo-nome';

  const labelEmail = renderLabel('E-mail:');
  const inputEmail = renderInput('email', 'Digite seu e-mail', 'E-mail');
  inputEmail.id = 'campo-email';
  labelEmail.htmlFor = 'campo-email';

  form.appendChild(labelNome);
  form.appendChild(inputNome);
  form.appendChild(document.createElement('br'));
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  form.appendChild(document.createElement('br'));
  form.appendChild(renderBotao('Enviar'));
  return form;
}
