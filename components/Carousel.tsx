import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";

export default function Carousel() {
  const Images = [
    "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/swx20pkn7ro9ytfnyd22",
    "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/u0sywgx3zchyd13q3pmn",
    "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/rc1iptyn2lplbxwgxrh1",
  ];
  const [image, setImage] = useState(0);
  const len = Images.length;
  return (
    <div className="space-y-2 space-x-2">
      <img
        src={Images[image]}
        alt="selectedImage"
        width="695px"
        height="460px"
        className="rounded-lg"
      />
      {Images.map((img, index) => (
        <FontAwesomeIcon
          key={index}
          className={`${
            index === image ? "text-red-400" : "text-gray-400"
          } inline-block cursor-pointer`}
          icon={["far", "dot-circle"] as IconProp}
          size="lg"
          onClick={() => setImage(index)}
        />
      ))}
    </div>
  );
}
