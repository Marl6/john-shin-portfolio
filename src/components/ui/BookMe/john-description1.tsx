import { FlipWords } from "./flip-words";
import { Typography } from "antd";

const { Text } = Typography;

export function JohnDescription1() {
  const words = ["speak boldly!", "inspire others!", "share knowledge!"];

  return (
    <div className="flex flex-col">
      <Text className="lg:text-7xl md:text-6xl text-5xl font-extrabold text-black font-LeagueSpartan">
        WATCH <br />
        JOHN
      </Text>
      <div>
        <FlipWords
          words={words}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#ef7e45] uppercase"
        />
      </div>
    </div>
  );
}
