import { Navigate, Outlet } from 'react-router-dom'
import useLogin from '../cutomHooks/useLogin'

type Props = {
    children?: JSX.Element
    redirectTo: string

}

const PrivareRoutes = ({children, redirectTo}: Props) => {
    const {isLogin} = useLogin();
    if (!isLogin) { return <Navigate to={redirectTo}/>}
    return children? children: <Outlet/>
}

export default PrivareRoutes;