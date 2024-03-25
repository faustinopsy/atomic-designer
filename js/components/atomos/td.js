export default function renderTableCell(text) {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
  }