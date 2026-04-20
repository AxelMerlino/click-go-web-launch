import { Clock, MapPin, Phone } from "lucide-react";

export const LocalSection = () => {
  return (
    <section id="local" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Visitanos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
            Pasá por nuestro local en Temperley
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Te esperamos para que veas y elijas tu producto en persona, en el corazón de Lomas de Zamora.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-primary">Dirección</p>
                <p className="text-muted-foreground text-sm">Temperley, Lomas de Zamora — Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-primary">Horarios</p>
                <p className="text-muted-foreground text-sm">Lunes a sábado · 10:00 a 20:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-primary">Contacto</p>
                <p className="text-muted-foreground text-sm">WhatsApp: +54 9 11 0000-0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border h-[420px]">
          <iframe
            title="Ubicación Click & Go en Temperley"
            src="https://www.google.com/maps?q=Temperley,+Lomas+de+Zamora,+Buenos+Aires,+Argentina&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
