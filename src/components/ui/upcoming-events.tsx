import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function UpcomingEvents() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
  {
    title: "The Digital Revolution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
  {
    title: "The Art of Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
  {
    title: "The Power of Communication",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
  {
    title: "The Joy of Creation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
  {
    title: "The Spirit of Adventure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    header: <Skeleton />,
    icon: "May 01, 2025 - May 02, 2025",
  },
];
