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

const logoLinks = [
  { img: logo1, url: "https://youtube.com" },
  { img: logo2, url: "https://youtube.com" },
  { img: logo3, url: "https://youtube.com" },
  { img: logo4, url: "https://youtube.com" },
  { img: logo5, url: "https://youtube.com" },
  { img: logo6, url: "https://youtube.com" },
  { img: logo7, url: "https://youtube.com" },
  { img: logo8, url: "https://youtube.com" },
  { img: logo9, url: "https://youtube.com" },
  { img: logo10, url: "https://youtube.com" },
  { img: logo11, url: "https://youtube.com" },
  { img: logo12, url: "https://youtube.com" },
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
        {logoLinks.map((logo, index) => (
          <div key={index} className="w-36 flex-shrink-0">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img
                src={logo.img}
                alt={`Logo ${index + 1}`}
                className="h-28 w-full object-contain cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
