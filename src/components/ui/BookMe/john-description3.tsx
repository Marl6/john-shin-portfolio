import { FlipWords } from "./flip-words";

export function JohnDescription3() {
  const words = [
    "description1",
    "description2",
    "description3",
    "description4",
  ];

  return (
    <div className="h-[1rem] flex justify-center items-center px-4">
      <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 font-lora">
        John is a
        <FlipWords words={words} />
        person
      </div>
    </div>
  );
}
