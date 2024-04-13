import React from 'react'
import { Link } from 'react-router-dom';
import Slider from '../../../components/Slider'
const TopRated = () => {
    const TopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=43219b7b77a33f9cc083e6a7f15bce09";

    return (
      <div className='mb-8'>
        <h2 className='text-white text-4xl ml-0 mx-0 p-2 text-left '>Top Rated</h2>
        <Slider apiEndpoint={TopRated} />
      </div>
    );
}

export default TopRated