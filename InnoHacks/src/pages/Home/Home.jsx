import React from 'react'
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-button">
          <button>Crear Nuevo Proyecto</button>
        </div>
        <div className="home-button">
          <button>Gestionar Proyecto</button>          
        </div>
      </div>

    </>
  )
}

export default Home;
