import React from "react";

const HoverableCells = props => {
  const { rows } = props;
  return (
    <div>
    
      {rows.map((row, index) => (
        <div key={index}>
          {row.map((col, index) => (
            <span
              className="cell d-inline-block m-1 shadow border"
              key={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export { HoverableCells };
