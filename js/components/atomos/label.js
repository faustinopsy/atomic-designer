export default function renderLabel(texto) {
  const label = document.createElement('label');
  label.textContent = texto;
  return label;
}
