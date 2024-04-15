import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Footer from "../home/footer/Footer";
import Header from "../home/header/Header";

const Details = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
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

    const fetchRecommendedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=43219b7b77a33f9cc083e6a7f15bce09`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recommended movies");
        }
        const data = await response.json();
        setRecommendedMovies(data.results);
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
        setError(error.message);
      }
    };

    fetchMovieDetails();
    fetchRecommendedMovies();
  }, [movie_id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie || !recommendedMovies) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
  };

  return (
    <>
      <Header />
      <div className="details-container">
        <div className="details-content flex text-white w-3/4 ml-auto mr-auto">
          <div className="movie-poster w-full h-auto p-5 ml-10">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-xl"
            />
          </div>
          <div className="movie-details">
            <h2 className="text-4xl font-extrabold p-5 text-start">
              {movie.title}
            </h2>
            <p className="text-start p-5">Release Date: {movie.release_date}</p>
            <p className="w-3/4 p-10">Overview: {movie.overview}</p>
            <p className="text-start p-5">Ratings: {movie.vote_average}</p>
          </div>
        </div>
        <div className="recommended-section mb-8 mt-16 w-full ml-auto mr-auto">
          <h3 className="text-white text-4xl text-start p-3">
            Recommended Movies
          </h3>
          <Slider {...settings}>
            {recommendedMovies.map((movie) => (
              <div key={movie.id}>
                <Link to={`/details/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="p-3 rounded-xl w-4/5 h-auto"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Details;
