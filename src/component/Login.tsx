import { useState, useEffect } from "react"
import { GoogleLogin } from '@react-oauth/google';
import useLogin from "../cutomHooks/useLogin";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const [alert, setAlert]= useState(false)
    const navigate = useNavigate();
    
    const { setIsLogin } = useLogin();
    
    
    const validate = (e:any) => {
        e.preventDefault();
        if(name === "asdw" && pass==="123"){
            setIsLogin()
            navigate('/chart');
        }
        setAlert(true);

        
    }
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 1000);

    }, [alert])
    
      
    return (
        <div className="flex text-center items-center justify-center h-screen flex-col">
            <form onSubmit={(e)=> validate(e)} action={"submit"}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                    <input 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        type="text"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input 
                    value={pass}
                    onChange={(e)=> setPass(e.target.value)}
                    type="password" 
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                {
                    alert &&
                    <div className="flex items-center justify-center my-6 mb-5 bg-white p-3 rounded">
                        <p className="text-sm text-red-500 dark:text-red-400">Usuario o contraseña incorrectos</p>
                    </div>
                }
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                type="submit"
                onClick={validate} >
                    Enviar
                </button>
                
            </form>
           <div className="mt-5">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
            />;
           </div>
        </div>
    )
}

export default Login