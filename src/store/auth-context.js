import  React, { useState , useEffect}  from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout: ()=>{},
    onLogin: (email,password)=>{}
});


export const AuthContextProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const UserLoggedinInfo = localStorage.getItem('isLoggedIn')
        if(UserLoggedinInfo === '1'){
          setIsLoggedIn(true);
        }
      
      }, [])

    const logoutHandler=()=>{
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')

    }
    const loginHandler = () =>{
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }
    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin:loginHandler}}>
        {
            props.children
        }
    </AuthContext.Provider>
}
    export default AuthContext;