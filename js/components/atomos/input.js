export default function renderInput(tipo, placeholder, ariaLabel) {
  const input = document.createElement('input');
  input.type = tipo;
  input.placeholder = placeholder;
  input.setAttribute('aria-label', ariaLabel || placeholder);
  return input;
}
