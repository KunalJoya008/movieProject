import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=43219b7b77a33f9cc083e6a7f15bce09`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(error.message);
      }
    };
    fetchMovieDetails();
  }, [movie_id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" w-full h-auto border border-slate-50 flex">
        <div className="movieImg w-full mr-10">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movieDetails text-white text-xl p-2">
          <h2 className="mb-5">{movie.title}</h2>
          <p className="mb-12">Release Date: {movie.release_date}</p>
          <p className="text-start">Overview: </p> <br />
          <p>{movie.overview}</p>
          <div className="ratings text-start p-2">
            <p>Ratings:</p>
            <ul>
              {movie?.vote_average && (
                <li>{`Average Rating: ${movie.vote_average}`}</li>
              )}
              {movie?.vote_count && (
                <li>{`Total Votes: ${movie.vote_count}`}</li>
              )}
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Details;
