import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Pierre D.",
      location: "Paris",
      text: "Grâce à ce guide, je roule beaucoup plus sereinement. Les conseils sont vraiment pratiques et faciles à mettre en place.",
      rating: 5,
    },
    {
      name: "Marie L.",
      location: "Lyon",
      text: "Un investissement qui en vaut vraiment la peine. J'ai économisé beaucoup plus que le prix du guide !",
      rating: 5,
    },
    {
      name: "Thomas B.",
      location: "Marseille",
      text: "Les explications sont claires et les méthodes sont 100% légales. Je recommande vivement.",
      rating: 5,
    },
    {
      name: "Sophie M.",
      location: "Bordeaux",
      text: "Ce guide m'a permis de comprendre comment éviter les pièges. Très utile au quotidien.",
      rating: 5,
    },
    {
      name: "Laurent F.",
      location: "Toulouse",
      text: "Je suis beaucoup plus confiant sur la route maintenant. Un must-have pour tous les conducteurs.",
      rating: 5,
    },
    {
      name: "Julie R.",
      location: "Nantes",
      text: "Les astuces données sont vraiment efficaces. Je ne regrette pas mon achat !",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Ce que nos clients en pensent
          </h2>
          <p className="text-gray-500 md:text-lg">
            Découvrez les retours de nos lecteurs satisfaits
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};