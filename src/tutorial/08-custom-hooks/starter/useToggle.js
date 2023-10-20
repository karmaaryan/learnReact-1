import { useState } from "react";

const useToggling = (params) => {
    const [value, updateValue] = useState(params)
    const updateFunction =()=>{
        updateValue(!value);
    }
    return {value, updateFunction}
}

export default useToggling;