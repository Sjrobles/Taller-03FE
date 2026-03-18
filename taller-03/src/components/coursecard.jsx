import './Coursecard.css'

function CourseCard({ icon, title, description, level }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="badge">{level}</span>
    </div>
  )
}

export default CourseCard
