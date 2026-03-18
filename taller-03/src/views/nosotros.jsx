import './Nosotros.css'

const equipo = [
  { nombre: 'Samuel Robles',  rol: 'Project Manager' },
  { nombre: 'Robles Samuel', rol: 'Desarrollador Senior' },
  { nombre: 'Samuel José', rol: 'Diseñadora UX/UI',    },
]

function Nosotros() {
  return (
    <section className="nosotros-page">
      <h2>Sobre Nosotros</h2>
      <p>Somos un equipo apasionado por la enseñanza del desarrollo frontend moderno.</p>
      <div className="team-grid">
        {equipo.map((p, i) => (
          <div key={i} className="team-card">
            <span className="avatar">{p.avatar}</span>
            <h3>{p.nombre}</h3>
            <p>{p.rol}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Nosotros
