import { cn } from "../../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current!.appendChild(clone);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[300px] max-w-full shrink-0 rounded-2xl border-2 border-transparent bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-6 py-5 h-auto min-h-[200px] md:h-auto md:min-h-0 md:w-[450px] md:px-8 md:py-6 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            style={{
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(90deg, #ef7e45, #ef7e45)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
            key={item.name}
          >
            <blockquote className="h-full flex flex-col">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-black text-justify font-sans flex-1">
                {item.quote}
              </span>
              <div className="relative z-20 mt-4 flex flex-row items-end">
                <span className="flex flex-col gap-1">
                  <span className="text-base md:text-lg leading-[1.4] font-bold text-black font-sans">
                    {item.name}
                  </span>
                  <span className="text-xs md:text-sm leading-[1.4] font-normal text-black/80 font-sans">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
