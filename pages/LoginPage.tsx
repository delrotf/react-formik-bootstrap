import React from "react";
import { DynamicTable, FormCard } from "../components";

const LoginPage = props => {
  return (
    <React.Fragment>
      <div className="login-page mt-5 pt-5 d-flex justify-content-center">
        <FormCard {...props} />
      </div>
        <DynamicTable/>
      </React.Fragment>
  );
};

export { LoginPage };
