import React, { useEffect, useRef, useState } from "react";
import logo1 from "../../../assets/img/featured/1.png";
import logo2 from "../../../assets/img/featured/2.png";
import logo3 from "../../../assets/img/featured/3.png";
import logo4 from "../../../assets/img/featured/4.png";
import logo5 from "../../../assets/img/featured/5.png";
import logo6 from "../../../assets/img/featured/6.png";
import logo7 from "../../../assets/img/featured/7.png";
import logo8 from "../../../assets/img/featured/8.png";
import logo9 from "../../../assets/img/featured/9.png";
import logo10 from "../../../assets/img/featured/10.png";
import logo11 from "../../../assets/img/featured/11.png";
import logo12 from "../../../assets/img/featured/12.png";

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
  logo11,
  logo12,
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
          <div key={index} className="w-36 flex-shrink-0">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-28 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
