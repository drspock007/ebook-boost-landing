import { Hero } from "@/components/Hero";
import { BookFeatures } from "@/components/BookFeatures";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BookFeatures />
      <PricingSection />
    </div>
  );
};

export default Index;