import { createContext, useContext, useEffect, useReducer, useState } from "react";


const DataContext = createContext();


export const DataContextProvider = ({children}) => {
    const [opportunities, setOpportunities] = useState([]);

  const getData = () => {
    fetch("https://opportunities-api.netlify.app/db.json")
    .then((res) => res.json())
    .then((data) => {
      setOpportunities(data.opportunities);
    })
  }

  useEffect(() => {
    getData();
  }, [])
  
  
    return (
        <DataContext.Provider value={{opportunities}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
 }