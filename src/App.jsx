import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Dispatch from './pages/Dispatch'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Stories from './pages/Stories'

function App() {
  return (
    <Router>
      <div className="site-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
