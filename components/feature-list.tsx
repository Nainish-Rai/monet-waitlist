import { FeatureCard } from "./feature-card";

const features = [
  {
    imageSrc: "/f1.svg",
    title: "Maximise Lifetime Value",
    description:
      "Enhance visibility, drive more purchases, and see your Customer Lifetime Value (CLV) soar.",
  },
  {
    imageSrc: "/f2.svg",
    title: "Turn Points into Profit",
    description:
      "Earn cashback on every transaction made using your loyalty points, creating real value for your brand.",
  },
  {
    imageSrc: "/f3.svg",
    title: "Feel the Love!",
    description:
      "Ignite engagement and activate your loyalty program, cultivating a passionate community around your brand.",
  },
];

export function FeatureList() {
  return (
    <section className="flex flex-col max-w-[516px]">
      {features.map((feature, index) => (
        <div key={index} className={index !== 0 ? "mt-11 sm:mt-10" : ""}>
          <FeatureCard {...feature} />
        </div>
      ))}
    </section>
  );
}
