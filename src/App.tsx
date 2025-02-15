import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetGallery from "./components/PetGallery";
import About from "./components/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<PetGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
