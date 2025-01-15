import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tab1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get('http://localhost:3000/project');
      setImages(res.data);
    };

    fetchImages();
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getCollageImages = (index) => {
    const collageImages = images.map((image, index) => {
      return image.images.map((image) => image.url);
    })

    return collageImages[index];
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.thumbnail}
          alt={"UIUX " + index}
          className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
          onClick={() => handleImageClick(index)}
        />
      ))}

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 grid grid-cols-3 gap-4">
            <button className="absolute top-4 right-4 rounded-full bg-gray-200 p-2 hover:bg-gray-300" onClick={handleCloseModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {getCollageImages(selectedImage).map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Collage Image ${index + 1}`}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tab1;