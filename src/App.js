import React from "react";
import "./App.css";
import Home from "./pages/Home";
//import Search from "./pages/Search";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import GoogleIcon from '@mui/icons-material/Google';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
