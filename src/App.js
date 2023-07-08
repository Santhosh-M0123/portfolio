import './App.css';
import {ThemeContext} from './context/Context';
import {useState} from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router} from "react-router-dom";
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/projects';
import Contact from './pages/Contact';
import Loaders from './Reusable_components/Loaders';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ToastContainer} from "react-toastify";
const App = () => {
  let [Theme,setTheme] = useState('light');
  let [isLoading,setLoading] = useState(true);

  let Time = new Date().getHours();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    Time > 18 ? setTheme('dark') : setTheme('light');
  },[])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   },4000)
  // },[])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, []);

  //Function to toggle theme to dark
  let Toggletheme = () => {
    setTheme(curr => curr == "light" ? 'dark' : 'light');
  }
  return(
    <div id={Theme}>
      <ToastContainer />
      <ThemeContext.Provider value={{Theme,Toggletheme}}>
        {isLoading ? <Loaders /> : <div>
        <Navbar />
          <Router>
          <Home/>
          <About />
          <Skills />
          <Projects/>
          <Contact />
          </Router>
        </div>}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;