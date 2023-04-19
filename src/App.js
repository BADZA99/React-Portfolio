// eslint-disable-next-line
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";





function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const location = useLocation();
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/"


  return (
    <div className="App">
      {/* particles js */}
      {/* afficher les particlues seulement quand nous sommes en home page */}
      {renderParticleJsIfCurrentPageIsHomePage && <Particles id="particles" options={particlesConfig} init={particlesInit} />}

      {/* navbar components */}
      <div className="App__navbar-wrapper">

      <Navbar />
      </div>

      {/* main page content */}
      {/* create all route */}

      <div className="App__main-content__wrapper">
        <Theme/>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
