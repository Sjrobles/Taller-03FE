import { Routes, Route } from 'react-router'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './views/home'
import Cursos from './views/cursos'
import Nosotros from './views/nosotros'
import Login from './views/login'
import NotFound from './views/notfound'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/cursos"   element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login"    element={<Login />} />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
