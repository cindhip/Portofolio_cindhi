import React, { useEffect, useState } from "react";
import axios from "axios";

const Tab2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get("https://colourful-floris-woxyin-ae88053f.koyeb.app/design");
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          src={image.thumbnail}
          alt={image.title}
          className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
          onClick={() => handleImageClick(image.thumbnail)}
        />
      ))}

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
