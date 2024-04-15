import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../pages/home/header/Header";
import Footer from "../../pages/home/footer/Footer";

function SearchResults() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    fetchSearchedMovies(query);
  }, [query]);

  const fetchSearchedMovies = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=43219b7b77a33f9cc083e6a7f15bce09&query=${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setSearchedMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <Header className="mb-10 " />
      <div className="flex flex-wrap justify-center gap-8 mx-8 mb-10">
        {searchedMovies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <div className="rounded-xl w-64 h-96 hover:scale-110 transform transition-transform duration-300">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-sm"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default SearchResults;
