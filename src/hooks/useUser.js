import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/loginService";
import Cookies from "universal-cookie";
export default function useUser(){
    const {token,setToken} = useContext(Context);
    const [state, setState] = useState({loading:false, error:false})

    const login = useCallback(({email,password}) => {
        const cookie = new Cookies();
        setState({loading:true, error:false});
        loginService({email,password})
            .then(token=>{
              
                if(token === undefined){
                    cookie.remove('user');
                    setToken(null);
                    setState({loading:false, error:true});
                }else{
                    cookie.set('user',token);
                    setState({loading:false, error:false});
                    setToken(token);
                }       
                setState({loading:false, error:true});
            }).catch(error =>{ 
                cookie.remove('user',token);
                setState({loading:false, error:true});   
                setToken(null);            
                console.error(error)
            });
    },[setToken,token])

    const logout = useCallback(() => {
        const cookie = new Cookies();   
        cookie.remove('user');
        setToken(null)
    },[setToken])

    return {
        isLogged: Boolean(token),
        isLogginLoading:state.loading,
        hasLoginError: state.error,
        login,
        logout,
    }
}