import React from "react";

const Logo = ({ src, className }) => {
  return (
    <div>
      <img src={src} alt="" className={className} />
    </div>
  );
};

export default Logo;
