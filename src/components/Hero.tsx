import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-up">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                Ne payez plus jamais de PV pour excès de vitesse
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Découvrez la méthode légale et infaillible pour éviter les contraventions routières et rouler l'esprit tranquille.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover"
                onClick={() => window.location.href = 'https://ebookia.store/produit/comment-ne-jamais-payer-de-contravention-pour-exces-de-vitesse/'}
              >
                Obtenir l'ebook à 9,99€
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/lovable-uploads/3b9ed4f4-f6aa-4320-8963-19c097957a4c.png"
              alt="Méthode infaillible pour ne pas payer de contravention"
              className="w-full max-w-[600px] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};