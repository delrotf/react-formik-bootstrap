import React from "react";
import { TableForm } from "..";

const FormCard = props => {
  return (
    <div className="login-card border">
      <div className="header text-center p-2 text-light">header</div>
      <div>
        <TableForm {...props} />
      </div>
    </div>
  );
};

export { FormCard };
