import { BackgroundGradient } from "./background-gradient";
import johnshin from "../../../src/assets/img/johnshin/mainimage.png"
export function MainBanner() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-m p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={johnshin}
          alt="jordans"
          height="600"
          width="600"
          className="object-contain"
        />
      </BackgroundGradient>
    </div>
  );
}
