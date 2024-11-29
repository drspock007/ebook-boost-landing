import { Hero } from "@/components/Hero";
import { BookFeatures } from "@/components/BookFeatures";
import { PricingSection } from "@/components/PricingSection";
import { PurchaseBanner } from "@/components/PurchaseBanner";
import { Testimonials } from "@/components/Testimonials";
import { VideoTestimonial } from "@/components/VideoTestimonial";

const Index = () => {
  return (
    <div className="min-h-screen pt-12">
      <PurchaseBanner />
      <Hero />
      <VideoTestimonial />
      <BookFeatures />
      <Testimonials />
      <PricingSection />
    </div>
  );
};

export default Index;