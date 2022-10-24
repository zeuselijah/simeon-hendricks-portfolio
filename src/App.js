import NavBar from './components/NavBar';
import Footer from './container/Footer';
import Projects from './container/Projects';
import Resume from './container/Resume';
import About from './container/About';
import './App.scss';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;