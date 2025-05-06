import { HeroParallax } from "./hero-parallax.tsx";
import { JstvVideos } from "../../constant/jstv-videos.ts";

export function JSTVParallax() {
  return <HeroParallax products={JstvVideos} />;
}
