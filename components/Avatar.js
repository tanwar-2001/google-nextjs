import React from "react";
import Image from "next/image";
const Avatar = ({ url,className }) => {
  return (
    <div className={`overflow-hidden rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}>
      <Image
        src={url}
        alt="profile pic"
          height={40}
          width={40}
          objectFit="contain"
      />
    </div>
  );
};

export default Avatar;
