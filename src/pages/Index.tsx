import { Hero } from "@/components/Hero";
import { BookFeatures } from "@/components/BookFeatures";
import { PricingSection } from "@/components/PricingSection";
import { PurchaseBanner } from "@/components/PurchaseBanner";

const Index = () => {
  return (
    <div className="min-h-screen pt-12">
      <PurchaseBanner />
      <Hero />
      <BookFeatures />
      <PricingSection />
    </div>
  );
};

export default Index;