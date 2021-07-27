import React, { Dispatch, SetStateAction, useContext } from "react";

interface SeachInputContextType {
  searchField: string;
  setSearchField: Dispatch<SetStateAction<string>>;
}

const SeachInputContext = React.createContext<SeachInputContextType>({
  searchField: "",
  setSearchField: () => {},
});

export default SeachInputContext;
export const useSearchField = () => useContext(SeachInputContext);
