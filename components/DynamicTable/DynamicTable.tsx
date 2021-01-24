import React from "react";
import { Table } from "react-bootstrap";

const DynamicTable = props => {
  const { rowCount, columnCount } = props;

  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const cols = [];
    for (let x = 0; x < columnCount; x++) {
      cols.push(x);
    }
    rows.push(cols);
  }

  return (
    <Table>
      {rows.map(row => (
        <tr>
          {row.map(col => (
            <td>asd</td>
          ))}
        </tr>
      ))}
    </Table>
  );
};

export { DynamicTable };
