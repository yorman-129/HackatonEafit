import {Routes, Route} from 'react-router-dom';
import App from '../App.jsx';
/* import Home from '../components/Home'; */
import Home from '../pages/Home/Home.jsx'
import Layout from '../pages/Layout/Layout.jsx'
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail.jsx';
import Projects from '../pages/Projects/Projects.jsx';


const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='ProjectDetail' element={<ProjectDetail/>}/>
            <Route path='Projects' element={<Projects/>}/> {/* Rutas dinamicas */}
        </Route>
    </Routes>
  )
}

export default AppRouter