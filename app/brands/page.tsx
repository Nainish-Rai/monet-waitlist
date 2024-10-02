import Footer from "@/components/(waitlistpage)/footer";
import Hero from "@/components/(waitlistpage)/hero";
import LetsChatSection from "@/components/(waitlistpage)/lets-chat-section";
import { SolutionsSection } from "@/components/(waitlistpage)/solutions-section";
import WhyUs from "@/components/(waitlistpage)/why-us";

export default function Home() {
  return (
    <div className="flex flex-col  w-full justify-center">
      <Hero />
      <WhyUs />
      <SolutionsSection />
      <LetsChatSection />
      <Footer />
    </div>
  );
}
