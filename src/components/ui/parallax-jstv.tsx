import { HeroParallax } from "../ui/hero-parallax";
import { JstvVideos } from "../../../src/components/constant/jstv-videos.ts";

export function JSTVParallax() {
  return <HeroParallax products={JstvVideos} />;
}
