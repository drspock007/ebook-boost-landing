import { Check } from "lucide-react";

export const BookFeatures = () => {
  const features = [
    "Comment éviter légalement les contraventions",
    "Des conseils d'experts en sécurité routière",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Ce que vous allez découvrir
          </h2>
          <p className="text-gray-500 md:text-lg max-w-2xl mx-auto">
            Un guide complet pour rouler en toute tranquillité
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Check className="text-primary mt-1" />
              <p className="text-gray-600">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};