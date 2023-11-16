import { useState } from "react";

const useToggle = (defaultValue) =>{
    const [someValue, udpateValue] = useState(defaultValue)
    const toggle=()=>{
        udpateValue(!someValue)
    }
    return {someValue, toggle}
};

export default useToggle;
