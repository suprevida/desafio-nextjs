import React, { useState } from "react";
import SeachInputContext from "./Context";

const SearchInputProvider: React.FC = ({ children }) => {
  const[searchField, setSearchField] = useState('');

  return (
    <SeachInputContext.Provider value={{ searchField, setSearchField }}>
      {children}
    </SeachInputContext.Provider>
  );
};

export default SearchInputProvider;
