import { Link } from 'react-router'
import Counter from '../components/counter'
import CourseCard from '../components/coursecard'
import './Home.css'

const cursos = [
  { icon: '⚛️', title: 'React Básico',   description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.', level: 'Principiante' },
  { icon: '🔁', title: 'React Hooks',    description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',          level: 'Intermedio'   },
  { icon: '📁', title: 'Estado Global',  description: 'Gestiona el estado con Context API y aprende cuándo usarlo.',                 level: 'Intermedio'   },
  { icon: '🚀', title: 'React Avanzado', description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',     level: 'Avanzado'     },
]

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Aprende <span>React</span> desde cero</h1>
        <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
        <Link to="/cursos" className="btn-hero">Ver Cursos</Link>
      </section>

      <section className="courses">
        <h2>Nuestros Cursos</h2>
        <p>Elige el camino que mejor se adapte a ti</p>
        <div className="course-grid">
          {cursos.map((c, i) => <CourseCard key={i} {...c} />)}
        </div>
      </section>

      <Counter />
    </>
  )
}

export default Home
