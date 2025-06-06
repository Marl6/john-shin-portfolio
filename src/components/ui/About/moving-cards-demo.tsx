import { InfiniteMovingCards } from "./moving-cards";

export function MovingCards() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The How Rich Asians Think book is for everyone. It follows the principles laid out by Napoleon Hill in the timeless masterpiece, Think and Grow Rich. The stories are primarily of Asians who have found success and abundance. These stories are rich and very thoughtfully arranged.",
    name: "Craig Stone",
    title: "An entrepreneur and associate producer of the film",
  },
  {
    quote:
      "I absolutely loved this book! It’s a must-read. I was not let down in any way. The principles written in this book completely transformed my thinking and gave me so much knowledge to apply in my life and business.",
    name: "Adriana Vildosola",
    title: "",
  },
  {
    quote:
      "One of the main individuals to bring this movie to life was John Shin, who is the Executive Producer of the movie. John started his entrepreneurial journey working for his parents' business as a child and at 17 he went on to start his own business in the valet parking industry. After countless endeavors, John became a millionaire at just 22 years old.",
    name: "Brandon T. Adams",
    title: "An entrepreneur and associate producer of the film",
  },
  {
    quote:
      "I had the honor of attending this year's annual Orlando International Film Festival... where I watched the film and met special guest business entrepreneur and speaker, John Shin... The film touches on groundbreaking truth about many of history's failed successes from a business perspective and personal development. I highly suggest tandem workshops centered around this film to whomever decides to invest their time.",
    name: "Beckettpatsyw",
    title: "An IMDb reviewer",
  },
];
