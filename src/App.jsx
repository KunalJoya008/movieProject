import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import SearchResults from "./components/searchResult/SearchResult";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:movie_id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
