import React, { useState } from "react";

export const LoginContext = React.createContext({
  rowCount: 0,
  setRowCount: null,
  columnCount: 0,
  setColumnCount: null
});

const LoginContextProvider = props => {
  const [rowCount, setRowCount] = useState(0);
  const [columnCount, setColumnCount] = useState(0);
  return (
    <LoginContext.Provider
      value={{
        rowCount,
        setRowCount,
        columnCount,
        setColumnCount
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider };
