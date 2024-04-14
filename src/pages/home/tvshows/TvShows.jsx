import React from 'react'
import Slider from '../../../components/Slider'



const TvShows = () => {
    const popularMovies = "https://api.themoviedb.org/3/tv/popular?api_key=43219b7b77a33f9cc083e6a7f15bce09";

    return (
      <div className='mb-8 '>
        <h2 className='text-white text-4xl ml-0 mx-0 p-2 text-left '>Trending</h2>
        <Slider apiEndpoint={popularMovies} />
      </div>
    );
}

export default TvShows
