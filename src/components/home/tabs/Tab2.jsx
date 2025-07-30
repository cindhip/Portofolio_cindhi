import { useEffect, useState } from "react";
import { getDesign } from "../../../api/projectApi";
import { Loader2 } from "lucide-react";

const Tab2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const base_url = import.meta.env.VITE_API_URL;
  
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const res = await getDesign();
      setImages(res.docs);
    };

    fetchImages();
  }, []);

  if (images.length === 0) {
    return <Loader2 className="animate-spin h-10 w-10 text-gray-500 mx-auto mt-20" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((item, index) => (
        <img
          key={index}
          src={base_url + item.thumbnail.url}
          alt={item.title}
          className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer aspect-square w-full h72 object-cover"
          onClick={() => handleImageClick(item.thumbnail)}
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
