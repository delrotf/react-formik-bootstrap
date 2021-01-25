import React from "react";
import { DynamicTable, FormCard } from "../components";
import { LoginContextProvider } from "../context";

const LoginPage = props => {
  return (
    <LoginContextProvider>
      <div className="login-page mt-5 pt-5 d-flex justify-content-center">
        <FormCard {...props} />
      </div>
      <div className="p-5">
        <DynamicTable />
      </div>
    </LoginContextProvider>
  );
};

export { LoginPage };
