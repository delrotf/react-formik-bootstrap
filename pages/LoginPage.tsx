import React from "react";
import { LoginCard } from "../components";

const LoginPage = props => {
  return (
      <div className="login-page mt-5 pt-5 d-flex justify-content-center">
        <LoginCard {...props} />
      </div>
  );
};

export { LoginPage };
