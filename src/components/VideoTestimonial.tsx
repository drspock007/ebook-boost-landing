export const VideoTestimonial = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Témoignage vidéo
          </h2>
          <p className="text-gray-500 md:text-lg">
            Découvrez le retour d'expérience d'un de nos clients satisfaits
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <video 
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src="https://ebookia.store/wp-content/uploads/2024/11/merge_BCFC713A-6135-4247-B62E-2904711D8DA7.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};