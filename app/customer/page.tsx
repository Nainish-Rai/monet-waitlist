import CustomerCta from "@/components/(customerWaitlist)/customer-cta";
import CustomerHero from "@/components/(customerWaitlist)/customer-hero";
import RedeemSection from "@/components/(customerWaitlist)/redeem-section";
import Footer from "@/components/(waitlistpage)/footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-black  w-full justify-center">
      <CustomerHero />
      <RedeemSection />

      <CustomerCta />
      <Footer />
    </div>
  );
}
