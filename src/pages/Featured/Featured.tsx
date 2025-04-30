import React, { useEffect, useRef, useState } from "react";
import logo1 from "../../assets/img/featured/forbes.png";
import logo2 from "../../assets/img/featured/forbes.png";
import logo3 from "../../assets/img/featured/forbes.png";
import logo4 from "../../assets/img/featured/forbes.png";
import logo5 from "../../assets/img/featured/forbes.png";
import logo6 from "../../assets/img/featured/losangelestimes.png";
import logo7 from "../../assets/img/featured/losangelestimes.png";
import logo8 from "../../assets/img/featured/losangelestimes.png";
import logo9 from "../../assets/img/featured/losangelestimes.png";
import logo10 from "../../assets/img/featured/losangelestimes.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const Featured: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current && containerRef.current) {
      const items = Array.from(scrollerRef.current.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current?.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      containerRef.current.style.setProperty("--animation-duration", "30s");

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
    >
      <div
        ref={scrollerRef}
        className={`flex w-max gap-10 py-4 ${
          start ? "animate-scroll" : ""
        } hover:[animation-play-state:paused]`}
      >
        {logos.map((logo, index) => (
          <div key={index} className="w-24 flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
