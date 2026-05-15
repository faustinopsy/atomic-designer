export default function renderTableHeaderCell(text, scope = 'col') {
  const th = document.createElement('th');
  th.scope = scope;
  th.textContent = text;
  return th;
}
