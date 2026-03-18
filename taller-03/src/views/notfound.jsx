import { Link } from 'react-router'
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound-page">
      <span className="code">404</span>
      <h2>Página no encontrada</h2>
      <p>La ruta que buscas no existe.</p>
      <Link to="/">Ir al inicio</Link>
    </div>
  )
}

export default NotFound
 