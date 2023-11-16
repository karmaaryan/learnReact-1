// using prop drilling


// import UserContainer from "./UserContainer";

// const navlink = ({value, logout, update}) => {
    //     return <div className="nav-container">
    //         <ul className="nav-links">
    //             <li><a href="http://">home</a></li>
    //             <li><a href="http://">About</a></li>
    //         </ul>
    //         <UserContainer logout={logout} value={value} update={update} />
    //     </div>
    // };
    
// export default navlink
    
    
// using context api
import UserContainer from "./UserContainer";
    
const navlink = () => {

    return <div className="nav-container">
        <ul className="nav-links">
            <li><a href="http://">home</a></li>
            <li><a href="http://">About</a></li>
        </ul>
        <UserContainer/>
    </div>
};

export default navlink
