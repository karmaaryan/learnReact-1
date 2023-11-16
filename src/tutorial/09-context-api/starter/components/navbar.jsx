// using prop drilling

// import Navlink from "../../starter/components/navlink";
// import {useEffect, useState} from "react"

// const navbar = () => {
    
//     const [user, updateUser] = useState({user : "something"})

//     const logout = () => {
//         updateUser(null)
//     }

//     return <div className="navbar">
//         <h1>Context API</h1>
//         <Navlink logout={logout} value={user} update={updateUser} />
//     </div>
// }; 

// export default navbar; 



// using context api 
import Navlink from "../../starter/components/navlink";
import {useEffect, useState, createContext} from "react"
import { useContext } from "react";
 
export const navbarContext = createContext();
export const useAppContext = () => useContext(navbarContext);

const navbar = () => {

    const [user, updateUser] = useState({user : "something"})
    const logout = () => {
        updateUser(null)
    }

    return <navbarContext.Provider value={{user, logout, updateUser}}>
        <div className="navbar">
            <h1>Context API</h1>
            <Navlink/>
        </div>
    </navbarContext.Provider>
}; 

export default navbar; 