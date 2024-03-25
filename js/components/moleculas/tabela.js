import renderTable from '../atomos/table.js';
import renderTableHead from '../atomos/thead.js';
import renderTableBody from '../atomos/tbody.js';
import renderTableRow from '../atomos/tr.js';
import renderTableHeaderCell from '../atomos/th.js';
import renderTableCell from '../atomos/td.js';

export default function renderTabelaFromObject(data) {
  const table = renderTable();
  const thead = renderTableHead();
  const headerRow = renderTableRow();
  Object.keys(data[0]).forEach(key => {
    const th = renderTableHeaderCell(key);
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = renderTableBody();
  data.forEach(item => {
    const row = renderTableRow();
    Object.values(item).forEach(value => {
      const td = renderTableCell(value);
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}
