import { createContext, useState, useContext } from "react"

const GlobalContext = createContext();

// custom hook 
export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [user, setUser] = useState("Aryan")
    return <GlobalContext.Provider value={{user, setUser}}>
        {children}
        <h1>ThisIsTheMainHeading</h1>
    </GlobalContext.Provider> 
}

export default AppContext