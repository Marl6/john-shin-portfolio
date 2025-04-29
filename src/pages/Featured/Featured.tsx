import React from "react";
import logo1 from "../../assets/img/logo/john-shin-logo-resized2.png";
import logo2 from "../../assets/img/logo/john-shin-logo-resized2.png";
import logo3 from "../../assets/img/logo/john-shin-logo-resized2.png";
import logo4 from "../../assets/img/logo/john-shin-logo-resized2.png";
import logo5 from "../../assets/img/logo/john-shin-logo-resized2.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Featured: React.FC = () => {
  if (!logos || logos.length === 0) {
    return <div>No logos to display</div>;
  }

  return (
    <div className="carousel-outer max-w-7xl mx-auto overflow-hidden mt-2">
      <div className="carousel-inner flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item w-24 flex-shrink-0 ml-10">
            <img
              src={logo}
              alt="Company Logo"
              className="h-15 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
