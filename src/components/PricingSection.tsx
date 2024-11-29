import { Button } from "@/components/ui/button";

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
              <span className="text-4xl font-bold">9,99€</span>
              <span className="text-gray-500 line-through ml-2">19,99€</span>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary-hover"
              onClick={() => window.location.href = 'https://ebookia.store/produit/comment-ne-jamais-payer-de-contravention-pour-exces-de-vitesse/'}
            >
              Télécharger le guide maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};