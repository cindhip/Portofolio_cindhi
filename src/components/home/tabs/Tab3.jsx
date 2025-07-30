import { useEffect, useState } from "react";
import { getCertificate } from "../../../api/projectApi";
import { Loader2 } from "lucide-react";

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

  if (images.length === 0) {
    return <Loader2 className="animate-spin h-10 w-10 text-gray-500 mx-auto mt-20" />;
  }

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
