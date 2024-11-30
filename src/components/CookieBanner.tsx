import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookiesChoice");
    if (!cookieChoice) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesChoice", "accepted");
    // Activer Google Analytics
    window.gtag("consent", "update", {
      analytics_storage: "granted"
    });
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesChoice", "rejected");
    // Désactiver Google Analytics
    window.gtag("consent", "update", {
      analytics_storage: "denied"
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg animate-fade-up">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez les accepter ou les refuser.
        </p>
        <div className="flex items-center gap-4">
          <Button onClick={acceptCookies} variant="default">
            Accepter
          </Button>
          <Button onClick={rejectCookies} variant="outline">
            Refuser
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};