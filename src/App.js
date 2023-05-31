import "./App.css";
import Header from "./components/header/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Homepage from "./components/homepage/Homepage";
import Introduction from "./components/Introduction/Introduction";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="introduction" element={<Introduction />} />
    </Routes>
  );
}

export default App;
