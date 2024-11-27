import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Investissez dans votre tranquillité
          </h2>
          <div className="mt-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200">
            <div className="mb-4">
              <span className="text-4xl font-bold">29,99€</span>
              <span className="text-gray-500 line-through ml-2">49,99€</span>
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary-hover mb-4">
              Télécharger le guide maintenant
            </Button>
            <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
              <Shield className="w-4 h-4 mr-2" />
              <span>Garantie satisfait ou remboursé pendant 30 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};