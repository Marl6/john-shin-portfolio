import { Timeline } from "./timeline";
import image1 from "../../../assets/img/timeline/1.webp";
import image2 from "../../../assets/img/timeline/2.png";
import image3 from "../../../assets/img/book/book.png";
import image4 from "../../../assets/img/timeline/4.jpeg";
import image5 from "../../../assets/img/timeline/5.png";
import image6 from "../../../assets/img/timeline/6.png";
import image8 from "../../../assets/img/timeline/8.png";

export function BusinessTimeline() {
  const data = [
    {
      year: "2024",
      title: "Featured Thought Leader",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200 text-justify">
            Featured in Entrepreneur Magazine for promoting purpose-driven
            success in a distracted, noisy world. Advocates for combining
            wealth-building with impact, encouraging entrepreneurs to pursue
            goals aligned with their purpose and values.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={image1}
                alt="startup template"
                width={500}
                height={500}
                className="h-40 md:h-80 lg:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      year: "2021 - 2023",
      title: "Philanthropy and Recognition",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200 text-justify">
            Co-Founded the non-profit organization "ALL FOR ONE", which has
            established nine orphanages in countries including Uganda, the
            Philippines, Nicaragua, Vietnam, China, and India, supporting over
            1,000 children.
          </p>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200 text-justify">
            Knighted as “Sir John Shin” in recognition of his philanthropic and
            educational work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={image2}
              alt="hero template"
              width={500}
              height={500}
              className="h-40 md:h-80 lg:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image6}
              alt="hero template"
              width={500}
              height={500}
              className="h-40 md:h-80 lg:h-80 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      year: "2020",
      title: "Author & Educator",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200 text-justify">
            Published the book “How Rich Asians Think” on January 6, 2020, a
            contemporary interpretation of Hill's philosophies tailored to the
            Asian community. The book combines modern insights with actionable
            steps, aiming to inspire readers to achieve their personal and
            financial goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={image8}
              alt="hero template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={image3}
              alt="feature template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      year: "2017 - 2018",
      title: "Think and Grow Rich Legacy",
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200 text-justify">
            Became the executive producer of the film Think and Grow Rich: The
            Legacy, inspired by Napoleon Hill’s classic work. The film was
            released in 2018 as a feature film in multiple countries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={image4}
              alt="hero template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={image5}
              alt="feature template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
