import { createContext, useState } from "react";
import hackthon from '../hackathonIdeas.json'
export const IdeasContext = createContext({
  ideasData:[],
  getIdeasData: () => { },
 
})


export const IdeasProvider = ({ children }) => {

  const [ideasData, setIdeasData] = useState(hackthon);
   const getIdeasData = (newData) => {
    setIdeasData((prevIdeasData) => [...prevIdeasData, newData]);
  }
 
 
  const value = { ideasData, getIdeasData,  }
  return <IdeasContext.Provider value={value}>{children }</IdeasContext.Provider>
}