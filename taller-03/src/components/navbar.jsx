import { NavLink, Link } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h2>ReactAcademy</h2>
      <ul>
        <li><NavLink to="/"        end>Inicio</NavLink></li>
        <li><NavLink to="/cursos"     >Cursos</NavLink></li>
        <li><NavLink to="/nosotros"   >Nosotros</NavLink></li>
        <li><Link   to="/login"       >Ingresar</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
