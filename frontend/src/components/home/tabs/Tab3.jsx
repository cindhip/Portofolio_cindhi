import React, { useEffect, useState } from "react";
import axios from "axios";

const Tab3 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get("https://colourful-floris-woxyin-ae88053f.koyeb.app/certificate");
      setImages(res.data);
    };

    fetchImages();
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img
          src={image.image}
          alt={image.title}
          width="auto"
          height="auto"
          className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
        />
      ))}
    </div>
  );
};

export default Tab3;
