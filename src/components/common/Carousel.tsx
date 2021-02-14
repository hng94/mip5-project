import React, { useState } from "react";
import { FiDisc, FiHexagon } from "react-icons/fi";
export default function Carousel() {
  const Images = [
    "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/swx20pkn7ro9ytfnyd22",
    "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/swx20pkn7ro9ytfnyd22",
    "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/swx20pkn7ro9ytfnyd22",
  ];
  const [image, setImage] = useState(0);
  const len = Images.length;
  return (
    <div className="space-y-2 space-x-2">
      <div className="aspect-w-16 aspect-h-9">
        <img src={Images[image]} alt="selectedImage" className="rounded " />
      </div>

      {Images.map((img, index) => (
        <FiDisc
          key={index}
          className={`${
            index === image ? "text-red-400" : "text-gray-700"
          } cursor-pointer h-6 inline-flex`}
          onClick={() => setImage(index)}
        />
      ))}
    </div>
  );
}
