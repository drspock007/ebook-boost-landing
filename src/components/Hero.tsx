import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-up">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                Découvrez les Secrets pour Réussir
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Un guide complet pour transformer votre vie et atteindre vos objectifs les plus ambitieux.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Obtenir l'ebook à 29,99€
              </Button>
              <Button variant="outline" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="/placeholder.svg"
              alt="Couverture de l'ebook"
              className="aspect-[4/5] object-cover rounded-2xl bg-gray-100 shadow-2xl"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};