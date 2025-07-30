import { useEffect, useState } from "react";
import { getProjects } from "../../../api/projectApi";

const Tab1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const base_url = import.meta.env.VITE_API_URL;

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getCollageImages = (index) => {
    const collageImages = images.map((image) => {
      return image.images.map((image) => image);
    });

    return collageImages[index];
  };

  useEffect(() => {
    const fetchImages = async () => {
      const res = await getProjects();
      setImages(res.docs);
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={base_url + image.thumbnail.url}
          alt={base_url + image.thumbnail.alt}
          className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
          onClick={() => handleImageClick(index)}
        />
      ))}

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-5 sm:p-10">
          <div className="bg-white rounded-lg p-4 grid lg:grid-cols-3 gap-4 overflow-y-auto max-h-[95vh] relative">
            <button
              className="absolute top-4 right-4 rounded-full bg-gray-200 p-2 hover:bg-gray-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {getCollageImages(selectedImage).map((imageSrc, index) => (
              <img
                key={index}
                src={base_url + imageSrc.url}
                alt={imageSrc.alt || "Collage Image " + (index + 1)}
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
