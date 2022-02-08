import "./App.css";
import Home from "./containers/Home";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import CallButton from "./containers/CallButton";
import ScrollToTop from "./containers/ScrollToTop";
import AboutPage from "./containers/AboutPage";
import Contact from "./containers/Contact";
import Engineer from "./containers/Engineer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EngineerListing from "./containers/EngineerListing";
import Studio from "./containers/Studio";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingenieurs" element={<EngineerListing />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ingenieur/:id" element={<Engineer />} />
        </Routes>
        <Footer></Footer>
        <CallButton></CallButton>
      </Router>
    </div>
  );
}

export default App;
