export default function renderP(texto) {
  const p = document.createElement('p'); 
  p.textContent = texto; 
  return p; 
}
