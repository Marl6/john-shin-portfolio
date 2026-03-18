import { LinkPreview } from "./link-preview";
import logo1 from "../../../assets/img/articlelogos/laweekly.png";
import logo2 from "../../../assets/img/articlelogos/snydershowdown.png";
import logo3 from "../../../assets/img/articlelogos/yahoofinance.png";
import logo4 from "../../../assets/img/articlelogos/marketingspeak.png";
import logo5 from "../../../assets/img/articlelogos/indiaentrep.svg";
import logo6 from "../../../assets/img/articlelogos/podchaser.png";
import logo7 from "../../../assets/img/articlelogos/listennotes.svg";
import logo8 from "../../../assets/img/articlelogos/sharonlechter.png";
import logo9 from "../../../assets/img/articlelogos/getyourselfoptimized.png";

const featuredItems = [
  {
    title: "LA Weekly",
    url: "https://www.laweekly.com/who-is-john-shin-inside-the-masterclass-thats-quietly-changing-lives-and-why-youd-be-crazy-to-miss-it/",
    logo: logo1,
  },
  {
    title: "Snyder Showdown",
    url: "https://www.snydershowdown.com/episodes/what-does-it-take-to-be-an-entrepreneur-john-shin",
    logo: logo2,
  },
  {
    title: "Yahoo! Finance",
    url: "https://finance.yahoo.com/news/sir-john-shin-self-made-160000065.html",
    logo: logo3,
  },
  {
    title: "Marketing Speak",
    url: "https://www.marketingspeak.com/wealth-is-a-state-of-mind-with-john-shin/",
    logo: logo4,
  },
  {
    title: "India Entrepreneur",
    url: "https://www.entrepreneur.com/en-in/news-and-trends/the-power-of-purpose-reimagining-success-in-a-noisy-world/492066",
    logo: logo5,
  },
  {
    title: "Podchaser",
    url: "https://www.podchaser.com/podcasts/the-passionate-few-221476/episodes/john-shin-how-to-go-from-500k-57372567",
    logo: logo6,
  },
  {
    title: "Listen Notes",
    url: "https://www.listennotes.com/podcasts/the-passionate-few/john-shin-how-to-go-from-O6_p4GvIKDH/",
    logo: logo7,
  },
  {
    title: "Sharon Lechter",
    url: "https://sharonlechter.com/2018/07/31/sustaining-business-growth-with-john-shin/",
    logo: logo8,
  },
  {
    title: "Get Yourself Optimized",
    url: "https://www.getyourselfoptimized.com/thinking-and-growing-rich-with-john-shin/",
    logo: logo9,
  },
];

export function FeaturedPreview() {
  return (
    <div className="py-16 px-4">
      <h2 className="md:text-5xl text-3xl font-bold text-center mb-12 text-black dark:text-white font-lora">
        <span className="text-black">Also</span>{" "}
        <span className="text-[#ef7e45]"> Featured</span>{" "}
        <span className="text-black">In</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {featuredItems.map((item, index) => (
          <LinkPreview
            key={index}
            url={item.url}
            className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-orange-500/10 hover:from-purple-500/20 hover:to-orange-500/20 transition-all duration-300 flex items-center justify-center p-6"
          >
            <div className="text-center">
              <div className="w-25 h-25 mx-auto mb-4">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-medium text-black dark:text-white">
                {item.title}
              </span>
            </div>
          </LinkPreview>
        ))}
      </div>
    </div>
  );
}
