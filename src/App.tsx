import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles/main/App.css";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";
import ContactMe from "./components/ContactMe";
import FlyingBirds from "./components/pure/FlyingBirds";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <FlyingBirds />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/workExperience" element={<WorkExperience />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
