import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const purchases = [
  { name: "Thomas", city: "Paris" },
  { name: "Marie", city: "Lyon" },
  { name: "Lucas", city: "Marseille" },
  { name: "Sophie", city: "Bordeaux" },
  { name: "Pierre", city: "Toulouse" },
];

export const PurchaseBanner = () => {
  const [currentPurchase, setCurrentPurchase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPurchase((prev) => (prev + 1) % purchases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary/10 py-2 px-4 fixed top-0 left-0 right-0 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPurchase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-gray-700"
        >
          <span className="font-semibold">{purchases[currentPurchase].name}</span> de{" "}
          <span className="font-semibold">{purchases[currentPurchase].city}</span> vient
          d'acheter le guide
        </motion.div>
      </AnimatePresence>
    </div>
  );
};