// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import About from "./screens/About";
import Shop from "./screens/Shop";
import Contact from "./screens/Contact";
import FirstPage from "./screens/FirstPage";
import SignupPage from "./screens/SignUpPage";
import LogInPage from "./screens/LogInPage";
import PaperArtContentPage from "./screens/paper_art_content";
import ResinArtContentPage from "./screens/resin_art_content";
import HandiCraftContentPage from "./screens/handicraft_content";
import SewingArtContentPage from "./screens/sewing_art_content";

function App() {
  return ( 
    <Router>
      <div>
        <Routes>
          <Route index element={<FirstPage />} />
          <Route path="/LogInPage" element={<LogInPage />} />
          <Route path="/SignUpPage" element={<SignupPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/paper_art_content" element={<PaperArtContentPage />} />
          <Route path="/resin_art_content" element={<ResinArtContentPage />} />
          <Route path="/handicraft_content" element={<HandiCraftContentPage />} />
          <Route path="/sewing_art_content" element={<SewingArtContentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
