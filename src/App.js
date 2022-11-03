import NavBar from './components/NavBar';
import Footer from './container/Footer';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
// import Main from './container/Main';
import './App.scss';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/skills":
      component = <Skills />
      break
    case "/projects":
      component = <Projects /> 
      break
      default:  
  }    
  return (
    <div className="App">
      <NavBar />
      {component}
      <Footer />
    </div>
  );
}

export default App;