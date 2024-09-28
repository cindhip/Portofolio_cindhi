import React, { useState } from 'react';

const Tab1 = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const images = [
    {
      src: '/uiresto.png',
      alt: 'Image 1',
    },
    {
      src: '/mockup2.png',
      alt: 'Image 2',
    },
    {
      src: '/finance.png',
      alt: 'Image 3',
    },
    {
      src: '/tour&travel.png',
      alt: 'Image 4',
      hasOverlay: true,
      overlayImages: [
        '/1.png',
        '/2.png',
        '/3.png',
        '/4.png',
        '/5.png',
      ],
    },
  ];

  const handleImageClick = (image) => {
    setIsOverlayOpen(image.hasOverlay);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6">
            <button
              className="absolute top-0 right-0 m-4 text-white bg-gray-800 hover:bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={closeOverlay}
            >
              &times;
            </button>
            <div className="grid grid-cols-3 gap-4">
              {images.find((img) => img.hasOverlay)?.overlayImages.map((imgSrc) => (
                <img key={imgSrc} src={imgSrc} alt="Collage Image" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tab1;