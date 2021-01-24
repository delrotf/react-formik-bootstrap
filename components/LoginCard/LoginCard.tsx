import React from "react";
import { LoginForm } from "..";

const LoginCard = props => {
  return (
    <div className="login-card border">
      <div className="header text-center p-2 text-light">header</div>
      <div>
        <LoginForm {...props} />
      </div>
    </div>
  );
};

export { LoginCard };
