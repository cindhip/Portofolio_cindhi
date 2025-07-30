import { useEffect, useState } from "react";
import { getCertificate } from "../../../api/projectApi";

const Tab3 = () => {
  const [images, setImages] = useState([]);

  const base_url = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchImages = async () => {
      const res = await getCertificate();
      setImages(res.docs);
    };

    fetchImages();
  }, []); 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((item, index) => (
        <img
          key={index}
          src={base_url + item.image.url}
          alt={item.title}
          width="auto"
          height="auto"
          className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
        />
      ))}
    </div>
  );
};

export default Tab3;
