import { useContext } from 'react'
import LoginContext, {LoginContexProps} from '../context/LoginProvider'

const useLogin = () => {
    return useContext(LoginContext) as LoginContexProps
} 
export default useLogin
