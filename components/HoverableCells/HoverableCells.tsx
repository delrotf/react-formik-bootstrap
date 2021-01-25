import React from "react";

const HoverableCells = props => {
  const { rows } = props;
  return (
    <div className="m-3">
      {rows.map((row, index) => (
        <div key={index} className="d-flex justify-content-center">
          {row.map((col, index) => (
            <span
              className="fancy-cell d-inline-block m-1 shadow border"
              key={index}
            />
          ))}
        </div>
      ))}
      <div className="text-muted text-center mt-3">
        <span>Table with fancy cells with effect on hover.</span>
      </div>
    </div>
  );
};

export { HoverableCells };
