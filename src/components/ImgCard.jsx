import React from 'react';

const ImgCard = ({ imageUrl }) => {
  return (
    <div className="imgCard rounded-xl  shadow-md overflow-visible">
      <img src={imageUrl} alt="Image" className="w-3/4 h-auto transform transition-transform duration-300 hover:scale-110 z-10" />
    </div>
  );
};

export default ImgCard;
