import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
    children?: JSX.Element
    isAuth: boolean
    redirectTo: string
}

const PrivareRoutes = ({children, isAuth, redirectTo}: Props) => {
    if (!isAuth) return <Navigate to={redirectTo}/>
    return <Outlet/>

}

export default PrivareRoutes;