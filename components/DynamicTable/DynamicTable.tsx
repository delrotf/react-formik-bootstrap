import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { LoginContext } from "../../context";

const DynamicTable = props => {
  const { rowCount, columnCount } = useContext(LoginContext);
  
  console.log('rowCount, columnCount', rowCount, columnCount)
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const cols = [];
    for (let x = 0; x < columnCount; x++) {
      cols.push(x);
    }
    rows.push(cols);
  }

  console.log(rows)

  return (
    <Table bordered>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map((col, index) => (
            <td key={index}></td>
          ))}
        </tr>
      ))}
    </Table>
  );
};

export { DynamicTable };
