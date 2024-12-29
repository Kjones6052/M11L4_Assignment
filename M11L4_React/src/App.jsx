// View Character Details code

// Import as needed
import { Route, Routes } from "react-router-dom";
import './AppStyles.css';
import HomePage from "./components/HomePage";
import BrowseCharacters from "./components/BrowseCharacters";
import CharacterDetails from "./components/CharacterDetails";
import Comics from "./components/Comics";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<BrowseCharacters />} />
        <Route path="/view-details/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
