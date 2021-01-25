import React from "react";
import { Table } from "react-bootstrap";

const SimpleTable = props => {
  const { rows } = props;

  return (
    <div>
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
      <div className="text-muted text-center">
        <span>Version 1. Simple table.</span>
      </div>
    </div>
  );
};

export { SimpleTable };
