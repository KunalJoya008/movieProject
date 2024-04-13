import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);




  return (
    <>
      <div className=" w-full h-auto border border-slate-50 flex">
        <div className="movieImg w-1/3 mr-10">
            <img src="https://imgs.search.brave.com/hE9fbg_59k4RwQ5zAh8-DMQATVYjA1oLYj1vxF5QDsI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDMvdGhlLWJhdG1h/bi1wb3N0ZXIuanBn" alt="" />
        </div>
        <div className="movieDetails text-white text-4xl p-2">Movie Details</div>
      </div>
    </>
  );
};

export default Details;
