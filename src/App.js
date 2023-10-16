import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavbarTop from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarTop/>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>

    {/* add navbar component */}
    {/* add Experience component */}
    {/* add testimonial component */}

    {/* add logo */}
    {/* add loader component */}
    {/* add scroll to top component */}
    {/* add toggle dark/light mode component */}
    {/* add text effect on my name which i have seen on insta that random words coming then actual words showing*/}

    </div>
  );
}

export default App;
