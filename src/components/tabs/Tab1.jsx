import React, { useState } from 'react';

const Tab1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    { src: 'finance.png', alt: 'Image 1' },
    { src: 'mockup2.png', alt: 'Image 2' },
    { src: 'tour&travel.png', alt: 'Image 3' },
    { src: 'mockup3.png', alt: 'Image 4' },
    // Add more images here
  ];

  const getCollageImages = (index) => {
    // Define the collage images for each main image
    const collageImages = {
      0: ['image5.png', 'image6.png', 'image7.png'], // For finance.png
      1: ['image8.png', 'image9.png', 'image10.png'], // For mockup2.png
      2: ['1.png', '2.png', '3.png', '4.png', '5.png'], // For tour&travel.png
      3: ['image14.png', 'image15.png', 'image16.png'], // For mockup3.png
      // Add more collage images for other main images
    };

    return collageImages[index];
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
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