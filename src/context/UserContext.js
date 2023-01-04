import React,{useState} from "react";
import Cookies from "universal-cookie";
const Context = React.createContext({});

export function UserContext({children}){
    const cookies = new Cookies();
    const [token,setToken] = useState(
      () => cookies.get("user")
    );
    
    return <Context.Provider value = {{token,setToken}}>
        {children}
    </Context.Provider>
}

export default Context;