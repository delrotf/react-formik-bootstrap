import React from "react";

const HoverableCells = props => {
  const { rows } = props;
  return (
    <div>
      {rows.map((row, index) => (
        <div key={index}>
          {row.map((col, index) => (
            <span
              className="fancy-cell d-inline-block m-1 shadow border"
              key={index}
            />
          ))}
        </div>
      ))}
      <div className="text-muted text-center">
        <span>Table with fancy cells with effect on hover.</span>
      </div>
    </div>
  );
};

export { HoverableCells };
