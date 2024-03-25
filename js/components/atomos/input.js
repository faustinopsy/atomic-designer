export default function renderInput(tipo,placeholder) {
    const input = document.createElement('input');
    input.type = tipo;
    input.placeholder = placeholder;
    return input;
  }
  