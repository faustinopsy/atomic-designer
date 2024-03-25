export default function renderH(tipo,texto) {
const h = document.createElement(tipo);
    h.textContent = texto;
    return h;
}