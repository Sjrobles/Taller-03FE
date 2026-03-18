import { useState } from 'react'
import './Login.css'

function Login() {
  const [form, setForm]       = useState({ email: '', password: '' })
  const [enviado, setEnviado] = useState(false)

  const isEmpty = !form.email.trim() || !form.password.trim()

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (isEmpty) return
    setEnviado(true)
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Bienvenido</h1>
        <p className="login-sub">Accede a tu cuenta de ReactAcademy</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email" name="email" type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              disabled={enviado}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password" name="password" type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              disabled={enviado}
            />
          </div>

          <button type="submit" className="btn-login" disabled={isEmpty || enviado}>
            {enviado ? 'Enviando…' : 'Ingresar'}
          </button>

          {enviado
            ? <p className="login-success"> Formulario enviado </p>
            : <p className="login-hint">Ingrese sus credenciales</p>
          }
        </form>
      </div>
    </div>
  )
}

export default Login
