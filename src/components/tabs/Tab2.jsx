import React, { useState } from 'react';

const Tab2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <img
        src="NameCard.png"
        alt="Image 1"
        className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
        onClick={() => handleImageClick('NameCard.png')}
      />
      <img
        src="PosterOpening.png"
        alt="Image 2"
        className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
        onClick={() => handleImageClick('PosterOpening.png')}
      />
      <img
        src="DesignMenu.png"
        alt="Image 3"
        className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
        onClick={() => handleImageClick('DesignMenu.png')}
      />
         <img
        src="Grooming.png"
        alt="Image 4"
        className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
        onClick={() => handleImageClick('Grooming.png')}
      />

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Selected Image"
            className="max-h-screen max-w-screen object-contain" // Ensure full-screen image doesn't distort
            onClick={handleCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default Tab2;