import React, { useState } from 'react';

import './Gallery.scss';

export const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    }
    return (
        <div className='Gallery '>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={index === selectedImage ? 'selected' : ''}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
    )
}
