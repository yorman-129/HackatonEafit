import {Outlet, Link, useNavigate} from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();
    // Cuando yo quiera mandar a otra ruta, uso navigate('/user/${id}/${nombre}')
  return (
    <>
        <nav>
            <ul>
                <li> <Link to="/home">Home</Link></li>
            </ul>
        </nav>
        <div>Esta es la parte donde se va a compartir con los otros componentes</div>
        <Outlet/>
    </>
  )
}

export default Layout
