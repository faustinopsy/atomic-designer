export default function renderTableHeaderCell(text) {
    const th = document.createElement('th');
    th.textContent = text;
    return th;
  }