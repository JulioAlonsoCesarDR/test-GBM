import ReactDOM from 'react-dom/client'
import './index.css'
import{BrowserRouter,Routes, Route, redirect, createBrowserRouter} from 'react-router-dom'
import Layouts from './component/Layouts'
import Chart from './component/Chart'
import Login from './component/Login'
import { GoogleOAuthProvider } from '@react-oauth/google';
import PrivareRoutes  from "./routes/PrivareRoutes";

const isLogin = false

const loader = async () => {
    const user = await isLogin;
    if (!user) {
      return redirect("/login");
    }
  };
  loader();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts/>}>
          <Route index path='/'element={<Login/>} />
          <Route path='/login' element={<Login/>}/>
          <Route element={ <PrivareRoutes redirectTo='/' isAuth={!!isLogin}/> }>
              <Route path='/chart' element={<Chart/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
)
