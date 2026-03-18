import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>¿Cuántos estudiantes van a inscribirse?</h2>
      <p>Usa los botones para ajustar el número</p>
      <div className="counter-box">
        <button onClick={() => setCount(c => Math.max(0, c - 1))}>−</button>
        <span>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <p className="counter-label">{count} estudiantes inscritos</p>
    </div>
  )
}

export default Counter
