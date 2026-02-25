import About from './About'
import './App.css'
import ProjectList from './components/ProjectList'
import Contact from './Contact'
import Footer from './Footer'
import HireMe from './HireMe'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <HireMe />
      <Footer />
      <ProjectList />
    </>
  )
}

export default App
