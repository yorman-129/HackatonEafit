import {Outlet, Link, useNavigate} from 'react-router-dom'
import '../Layout/Layout.scss'

const Layout = () => {
    //const navigate = useNavigate();
    // Cuando yo quiera mandar a otra ruta, uso navigate('/user/${id}/${nombre}')
  return (
    <>
        <nav className='nav-container'>
            <a href='/'><img src="../../../public/favicon.ico" alt="" /></a>
            <a className='nav-container__projects' href="/Projects">Projects</a>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout
