import renderMainLayout from '../components/templates/mainLayout.js';
import renderForm from '../components/moleculas/form.js';
import renderLabel from '../components/atomos/label.js';

function renderContato() {
  const contato = document.createElement('div');
  contato.appendChild(
    renderLabel(`Aqui temos a página CONTATO que poderia renderizar varias coisas`)
    )
  contato.appendChild(renderForm());
  return renderMainLayout(contato,'Contato');
}

export default renderContato;
