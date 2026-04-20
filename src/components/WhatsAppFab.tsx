import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <a
    href="https://wa.me/5491100000000?text=Hola%20Click%20%26%20Go!"
    target="_blank"
    rel="noreferrer"
    aria-label="Chatear por WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-accent text-accent-foreground flex items-center justify-center shadow-accent hover:scale-110 transition-smooth"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);
