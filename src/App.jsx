import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import "./utilities.scss";

// Organisms

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wcag from "./pages/Wcag";
import Rgaa from "./pages/Rgaa";
import Rgesn from "./pages/Rgesn";
import About from "./pages/About";
// Pages exercices
import ReactCounter from "./pages/ReactCounterV2";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/*offers={data.offers}*/}
          <Route path="/about" element={<About />} />

          <Route path="/wcag" element={<Wcag />} />
          <Route path="/rgaa" element={<Rgaa />} />
          <Route path="/rgesn" element={<Rgesn />} />

          {/* <Route path="/wcag/:id" element={<Wcag />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/reactCounter" element={<ReactCounter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" />
          <Route path="*" element={<p>All</p>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
