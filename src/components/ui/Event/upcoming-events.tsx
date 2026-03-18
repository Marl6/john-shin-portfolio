import { BentoGrid, BentoGridItem } from "./bento-grid";

export function UpcomingEvents() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={item.title.toString() + i}
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
  <div className="flex min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-[#f7e4d7] to-[#fff9f3]" />
);

const items = [
  {
    title: "Executive Keynote: Leading During Volatility",
    description:
      "A practical framework for founders and leadership teams to make better decisions under pressure.",
    header: <Skeleton />,
    icon: "Q2 2026 • Virtual + In-Person",
  },
  {
    title: "Growth Lab: Scale Without Losing Culture",
    description:
      "A workshop built for scaling organizations that want to preserve accountability, values, and execution speed.",
    header: <Skeleton />,
    icon: "Invite-Only • Founder Cohort",
  },
  {
    title: "Investor Circle Roundtable",
    description:
      "A private discussion on market positioning, long-term value creation, and partnership strategy.",
    header: <Skeleton />,
    icon: "Quarterly Session",
  },
  {
    title: "High-Performance Team Intensive",
    description:
      "Tactical coaching for managers and operators to improve communication cadence, standards, and outcomes.",
    header: <Skeleton />,
    icon: "Half-Day Intensive",
  },
  {
    title: "Financial Literacy For Next-Gen Leaders",
    description:
      "An educational session to strengthen decision quality in personal and business finance.",
    header: <Skeleton />,
    icon: "Community Program",
  },
  {
    title: "Strategic Mentorship Live",
    description:
      "A live mentorship format focused on growth constraints, execution bottlenecks, and leadership leverage.",
    header: <Skeleton />,
    icon: "Monthly • Limited Seats",
  },
  {
    title: "Purpose, Profit, and Legacy Summit",
    description:
      "A flagship session connecting business performance with long-term philanthropic and legacy impact.",
    header: <Skeleton />,
    icon: "Annual Signature Event",
  },
];
