import { createContext, useState, useContext } from "react";

const Context = createContext();

export const AppContext = ({children}) => {
    const [ page, setPage ] = useState(1);

    return (
        <Context.Provider
          value={{
              page,
              setPage
          }}
          >{children}
          </Context.Provider>
    );
}


export const useAppContext = () => useContext(Context);