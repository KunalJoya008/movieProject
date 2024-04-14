import React from 'react'
import Slider from '../../../components/Slider'



const Recommended = () => {
    const recommended = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=43219b7b77a33f9cc083e6a7f15bce09`;

    return (
      <div className='mb-8 mt-16'>
        <h2 className='text-white text-4xl ml-0 mx-0 p-2 text-left '>Recommended</h2>
        <Slider apiEndpoint={recommended} />
      </div>
    );
}

export default Recommended
