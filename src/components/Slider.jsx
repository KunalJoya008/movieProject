import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ImgCard from "./ImgCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = ({ apiEndpoint }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  //   const heading = "Trending";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiEndpoint}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
  };

  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="slide-item">
              <Link to={`/details/${movie.id}`}>
                <ImgCard
                  imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MovieSlider;
