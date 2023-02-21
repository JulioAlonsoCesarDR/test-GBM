import {Outlet} from 'react-router-dom'

const Layouts = () => {
  return (
    <div className='bg-cyan-800 h-screen'>
      <Outlet/>
    </div>
  )
}

export default Layouts