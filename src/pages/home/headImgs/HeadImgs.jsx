import React, { useState, useEffect } from "react";

const HeadImgs = () => {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        // Fetch list of upcoming movies from TMDb API
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=43219b7b77a33f9cc083e6a7f15bce09"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch upcoming movies");
        }
        const data = await response.json();

        // Randomly select a movie from the list
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomMovie = data.results[randomIndex];

        setRandomMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMovie();
  }, []);

  return (
    <div>
      <h1>Welcome to Movie Zone</h1>
      {randomMovie && (
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
            alt={randomMovie.title}
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h2 className="text-white absolute ml-20 -mt-20 text-4xl">
              {randomMovie.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadImgs;
