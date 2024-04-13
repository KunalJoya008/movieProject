import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movie_id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
