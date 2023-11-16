// by using prop drilling

// const UserContainer = ({value, logout}) => {
    
    //     return <div className="user-container">
    //         {value ? <>
    //             <p>Hii, {value?.user}</p>
    //             <button className="btn" onClick={logout}>LogOut</button>
    //         </> : <p>please login</p>}
    //     </div>
    // }
    
    // export default UserContainer;
    
    
    // using context api
    
import { useAppContext } from "./navbar";
    
const UserContainer = () => {

    const {user, logout} = useAppContext();

    return <div className="user-container">
        {user ? <>
            <p>Hii, {user?.user}</p>
            <button className="btn" onClick={logout}>LogOut</button>
        </> : <p>please login</p>}
    </div>
}

export default UserContainer;