import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { AppContext } from "../../context";
import { HoverableCells } from "../HoverableCells/HoverableCells";

const DynamicTable = props => {
  const { rowCount, columnCount } = useContext(AppContext);

  console.log("rowCount, columnCount", rowCount, columnCount);
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const cols = [];
    for (let x = 0; x < columnCount; x++) {
      cols.push(x);
    }
    rows.push(cols);
  }

  console.log(rows);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      {!rowCount && !columnCount && (
        <div className="lead">
          Start entering rows and columns and see the magic happens here.
        </div>
      )}
      {!!rowCount && !!columnCount && (
        <Table className="shadow-lg" bordered>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((col, index) => (
                  <td key={index} />
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <HoverableCells rows={rows} />
    </div>
  );
};

export { DynamicTable };
