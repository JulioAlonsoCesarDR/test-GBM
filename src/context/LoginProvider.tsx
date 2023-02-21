import { createContext, useState } from "react";


export type LoginContexProps = {
  isLogin: boolean
  setIsLogin: () => void; 
};


const LoginContext = createContext<LoginContexProps | null>(null);

interface props {
  children?: JSX.Element | any
}

const LoginProvider = ( {children} :props) => {

  const [isLogin, setIsLogin] = useState<boolean> (false);

  const onChangeState = () => {
    setIsLogin(!isLogin)
  }

  return (
    <LoginContext.Provider value={{isLogin, setIsLogin: onChangeState}}>
      {children}
    </LoginContext.Provider>
  )
       
}
export {
LoginProvider
}
export default LoginContext;